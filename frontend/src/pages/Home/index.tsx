import PropTypes from "prop-types";
import  "./styles.scss";
import React, { Component, useState, useEffect, useRef } from "react";
import { Timeline, Skeleton, Card, Affix, Upload, Button, message, Row, Col, Tooltip } from "antd";
import { UploadOutlined, RotateLeftOutlined, RotateRightOutlined, ZoomInOutlined, ZoomOutOutlined , ClearOutlined } from '@ant-design/icons';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import DownloadModal from '../../components/DownloadModal';
import demoImage from '../../images/demo.png';
import src from "*.bmp";
import {publishImage} from '../../services'
import Meta from "antd/lib/card/Meta";

const limit = 10;
const start = 0;

interface Props {
}

type HomeProps = {
    loading: boolean
}

let initialData: Cropper.Data;
let tmpSrc: any;
let placeholder: any;
placeholder = 'https://via.placeholder.com/500';
  
const Home = () => {
    const [fileSrc, setFileSrc] = useState(tmpSrc);
    const [croppedImage, setCroppedImage] = useState(placeholder);
    const [rotate, setRotate] = useState(0);
    const [zoom, setZoom] = useState(0.2);
    const [cropper, setCropper] = useState<Cropper>();
    const [downloadImageUrl, setDownloadImageUrl] = useState('');

    initialData = {
        x: 200,
        y: 200,
        width: 500,
        height: 600,
        rotate: 0,
        scaleX: 1,
        scaleY: 1,
    }

    const getCropData = () => {
        
        if (typeof cropper !== 'undefined') {
            setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        }
    };

    const onReset = () => {
        
        if (typeof cropper !== 'undefined') {
            cropper.reset();
            setZoom(0.2);
        }
    }
    
    const cropperProps = { // make sure all required component's inputs/Props keys&types match
        src: fileSrc,
        initialAspectRatio: 4/4,
        rotatable: true,
        zoomTo: zoom,
    };

    const beforeUpload = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let src = reader.result;
            setFileSrc(src)
            
        };
        return false;
    }

    const updateZoom = (val: number) => {
        let zm = zoom;
        zm = zoom + val;
        setZoom(zm);
        
        if (typeof cropper !== 'undefined') {
            cropper.zoomTo(zm);
        }
    }

    const updateRotate = (val: number) => {
        let rt = rotate;
        rt = rotate + val;
        setRotate(rt);
        
        if (typeof cropper !== 'undefined') {
            cropper.rotateTo(rt);
        }
    }

    const publish = () => {
        if(croppedImage === placeholder) {
            message.error("Please generate preview before publishing.")
        } else {
            message.loading("please wait while the image is being processed.", () => {
                publishImage({
                    file: croppedImage
                }, (resp: any) => {
                    setDownloadImageUrl(resp.previewUrl)
                }, () => {
                    message.error('Error uploading image')
                })
            })
            
        }
    }

    return (
        <div>
            {
                !fileSrc && (
                    <>
                        <Card
                            hoverable
                            style={{ width:600, height: 600, margin: 'auto' }}
                            cover={<img alt="example" src={demoImage} style={{height: '-webkit-fill-available'}}/>}
                        >
                        </Card>
                        <Upload beforeUpload={beforeUpload}>
                            <Button>
                                <UploadOutlined /> Click to Upload
                            </Button>
                        </Upload>
                    </>
                    
                )
            }
            
            {   
                fileSrc && (
                    <Row>
                        <Col span={12}>
                            <Card style={{height: '50%'}}>
                                <Cropper
                                    {...cropperProps}
                                    dragMode={"move"}
                                    onInitialized={(instance) => {
                                        setCropper(instance);
                                        setZoom(0.2);
                                        instance.setData(initialData);
                                    }}
                                />
                                <div className="actions">
                                    <Tooltip title="Rotate Left">
                                        <Button icon={<RotateLeftOutlined/>} onClick={() => {
                                            updateRotate(-90);
                                        }}/>
                                    </Tooltip>
                                    <Tooltip title="Rotate Right">
                                        <Button icon={<RotateRightOutlined/>} onClick={() => {
                                            updateRotate(90);
                                        }}/>
                                    </Tooltip>
                                    <Tooltip title="ZoomIn">
                                        <Button icon={<ZoomInOutlined/>} onClick={() => {
                                            updateZoom(0.1)
                                        }}/>
                                    </Tooltip>
                                    <Tooltip title="ZoomOut">
                                        <Button icon={<ZoomOutOutlined/>} onClick={() => {
                                            updateZoom(-0.1)
                                        }}/>
                                    </Tooltip>
                                    <Tooltip title="Reset">
                                        <Button icon={<ClearOutlined/>} onClick={() => {
                                            onReset();
                                        }}/>
                                    </Tooltip>
                                    <Button onClick={() => {
                                        setFileSrc('');
                                        setCroppedImage('');
                                    }}>Upload new image</Button>
                                    <Button onClick={() => getCropData()}>Preview</Button>
                                    <Button onClick={() => publish()}>Publish</Button>
                                </div>
                            </Card>
                            
                        </Col>

                        <Col span={12}>
                            <Card
                                hoverable
                                style={{ margin: '10px', background: 'transparent', height: 'auto', width: '90%'  }}
                                cover={<img alt="example" src={croppedImage} style={{margin: 'auto',width: '90%'}}/>}
                            >
                            </Card>
                        </Col>
                    </Row>
                )
            }
            <DownloadModal fetchUrl={downloadImageUrl} handleCancel={() => {
                setDownloadImageUrl('');
            }}/>
        </div>
    );
}

export default Home;
