import React from 'react';
import { storiesOf } from '@storybook/react';
import Home from '../pages/Home'
import { Timeline, Skeleton, Card, Affix, Upload, Button, message, Row, Col, Tooltip } from "antd";
import { UploadOutlined, RotateLeftOutlined, RotateRightOutlined, ZoomInOutlined, ZoomOutOutlined , ClearOutlined } from '@ant-design/icons';
import demoImage from '../images/demo.png';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import '../pages/Home/styles.scss'
import DownloadModal from '../components/DownloadModal';
    
let placeholder = demoImage;
const cropperProps = { // make sure all required component's inputs/Props keys&types match
  src: placeholder,
  initialAspectRatio: 4/4,
  rotatable: true,
};


storiesOf('Home', module)
  .add('Demo Image', () => <Card
                              hoverable
                              style={{ width:600, height: 600, margin: 'auto' }}
                              cover={<img alt="example" src={demoImage} style={{height: '-webkit-fill-available'}}/>}
                            ></Card>
  )
  .add('Upload File Button', () => <Upload>
                                    <Button>
                                        <UploadOutlined /> Click to Upload
                                    </Button>
                                  </Upload>
  )
  .add('Cropper Intialise', () => 
      <Cropper 
        {...cropperProps}
        style={{height: 600, width: 600}}
      />
  )
  .add('Cropper Actions', () => 
      <div className="actions">
        <Tooltip title="Rotate Left">
            <Button icon={<RotateLeftOutlined/>}/>
        </Tooltip>
        <Tooltip title="Rotate Right">
            <Button icon={<RotateRightOutlined/>}/>
        </Tooltip>
        <Tooltip title="ZoomIn">
            <Button icon={<ZoomInOutlined/>}/>
        </Tooltip>
        <Tooltip title="ZoomOut">
            <Button icon={<ZoomOutOutlined/>}/>
        </Tooltip>
        <Tooltip title="Reset">
            <Button icon={<ClearOutlined/>}/>
        </Tooltip>
      </div>
  )
  .add('Image Preview', () =>    
    <Card
      hoverable
      style={{ margin: '10px', background: 'transparent', height: 'auto', width: '90%'  }}
      cover={<img alt="example" src={demoImage} style={{margin: 'auto',width: '90%'}}/>}
    >
    </Card>
  )
  .add('Download Modal', () =>    
    <DownloadModal fetchUrl={demoImage}  handleCancel={() => {}}/>
  )