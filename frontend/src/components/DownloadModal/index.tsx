import React, { Component, useState, FunctionComponent, useEffect } from 'react';
import { Modal, Button, Card, message } from 'antd';
import {apiDownload} from '../../services';

type DownloadProps = {
    fetchUrl: string,
    handleCancel: () => void
}

const DownloadModal : FunctionComponent<DownloadProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [fetchUrl, setFetchUrl] = useState('');
    
    useEffect(() => {
        if(props.fetchUrl != '') {
          console.log(props.fetchUrl);
          setFetchUrl(props.fetchUrl);
          setVisible(true);
        }
    },[props])

  const handleOk = () => {
    setLoading(true);
    apiDownload(fetchUrl, (response: any) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `image_${Math.round(+new Date()/1000)}.png`);
        document.body.appendChild(link);
        link.click();
        message.success("Downloaded");
        setLoading(false);
        setVisible(false);
    }, () => {
        message.warn("Error downloading");
        setLoading(false);
        setVisible(false);
    })
  };

  const handleCancel = () => {
    setFetchUrl('');
    setVisible(false);
    props.handleCancel();
  };

    return (
      <>
        <Modal
          centered={true}
          width={'90%'}
          style={{height: '60%'}}
          visible={visible}
          title="Preview Image"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="download" type="primary" loading={loading} onClick={handleOk}>
              Download
            </Button>,
          ]}
        >
          <Card
            style={{ width: '95%', height: '50%', margin: 'auto' }}
            cover={<img alt="Image Preview" src={fetchUrl} style={{height: '-webkit-fill-available'}}/>}
          />
        </Modal>
      </>
    );
}
export default DownloadModal;