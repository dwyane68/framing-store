import PropTypes from "prop-types";
// import style from "./styles.scss";
import React, { Component, useState, useEffect } from "react";
import { Timeline, Skeleton, Card, Affix, Upload, Button, message, Row, Col, Tooltip } from "antd";
import { UploadOutlined, RotateLeftOutlined, RotateRightOutlined, ZoomInOutlined, ZoomOutOutlined , ClearOutlined } from '@ant-design/icons';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import src from "*.bmp";

const limit = 10;
const start = 0;

interface Props {
}

type HomeProps = {
    loading: boolean
}

let cropper: Cropper;
let cData: Cropper.Data;
let tmpSrc: any;

  
const Home = () => {

    const [loading, setLoading] = useState(false);
    const [style, setStyle] = useState({height: 400, width: 500});
    const [initialAspectRatio, setAscpectRatio] = useState(4/4);
    const [containerStyle, setContainerStyle] = useState({ maxHeight: "80vh", borderRadius: "10px" });
    const [guides, setGuides] = useState(false);
    const [data, setData] = useState(cData);
    const [fileSrc, setFileSrc] = useState(tmpSrc);
    const [rotate, setRotate] = useState(0);
    // const [style, setStyle] = useState({height: 400, width: 500});

    const _crop = (e: any) => {
        
        // console.log(e);
        // // image in dataUrl
        // console.log(cropper && cropper.getCroppedCanvas().toDataURL());
    }

    const _afterCrop = (e: any) => {
        console.log(e);
        
    }   
    
    const cropperProps = { // make sure all required component's inputs/Props keys&types match
        src: fileSrc,
        style,
        initialAspectRatio: 4/4,
        guides,
        crop: _crop,
        containerStyle,
        rotatable: true,
        data,
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
    
    const onReady = (e: any) => {
        setData({
            x: 100,
            y: 100,
            width: 500,
            height: 500,
            rotate: rotate,
            scaleX: 1,
            scaleY: 1,
        });
    }

    const handleUpdate = () => {
        setData({
            x: 100,
            y: 100,
            width: 500,
            height: 500,
            rotate: rotate,
            scaleX: 1,
            scaleY: 1,
        });
    }

    return (
        <div>
            {
                !fileSrc && (
                    <Upload beforeUpload={beforeUpload} >
                        <Button>
                        <UploadOutlined /> Click to Upload
                        </Button>
                    </Upload>
                )
            }
            
            {
                fileSrc && (
                    <Row>
                        <Col>
                            <Cropper
                                width={'50%'}
                                {...cropperProps}
                                ready={onReady}
                                dragMode={"move"}
                                cropend={_afterCrop}
                            />
                        </Col>
                        <Col>
                            <Card>
                                <Tooltip title="Rotate Left">
                                    <Button icon={<RotateLeftOutlined/>} onClick={() => {
                                        setRotate(rotate + 90);
                                        handleUpdate()
                                    }}/>
                                </Tooltip>
                                <Tooltip title="Rotate Right">
                                    <Button icon={<RotateRightOutlined/>} onClick={() => {
                                        setRotate(rotate + 90);
                                        handleUpdate()
                                    }}/>
                                </Tooltip>
                                <Tooltip title="ZoomIn">
                                    <Button icon={<ZoomInOutlined/>} onClick={() => {
                                        // setRotate(rotate + 90);
                                        // handleUpdate()
                                    }}/>
                                </Tooltip>
                                <Tooltip title="ZoomOut">
                                    <Button icon={<ZoomOutOutlined/>} onClick={() => {
                                        // setRotate(rotate + 90);
                                        // handleUpdate()
                                    }}/>
                                </Tooltip>
                                <Tooltip title="Reset">
                                    <Button icon={<ClearOutlined/>} onClick={() => {
                                        // setRotate(rotate + 90);
                                        // handleUpdate()
                                    }}/>
                                </Tooltip>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </div>
    );
}

export default Home;
