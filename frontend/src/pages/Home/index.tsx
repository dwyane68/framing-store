import PropTypes from "prop-types";
// import style from "./styles.scss";
import React, { Component } from "react";
import { Timeline, Skeleton, Card } from "antd";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const limit = 10;
const start = 0;

interface Props {
}

type HomeProps = {
    loading: boolean
}

let cropper: any;

class Home extends Component<{}, HomeProps> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false
        };
    }


    _crop(e: any) {
        // console.log(e);
        // // image in dataUrl
        // console.log(cropper && cropper.getCroppedCanvas().toDataURL());
    }

    render() {
        const { loading } = this.state;
        const cropperProps = { // make sure all required component's inputs/Props keys&types match
            src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            style: {height: 400, width: '100%'},
            initialAspectRatio: 4/4,
            guides: false,
            crop: this._crop,
        };

        return (
            <Skeleton loading={loading}>
                <Cropper
                    {...cropperProps}

                />
            </Skeleton>
        );
    }
}

export default Home;
