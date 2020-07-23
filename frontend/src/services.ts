// import React from 'react';
import { message } from 'antd';
import axios from 'axios';
import config from './config';

const { BASE_URL } = config;

export const apiDownload = (url: string, cb?: any, err?: any) => {
	axios({
        url: `${url}`,
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        cb(response);
    }).catch((error) => {
        err(error);
    });
}

const apiGet = ({ path, params, headers, cb, err } : { path: string, params: any, headers?: any, cb: any, err: any }) => {
	axios
        .get(`${BASE_URL}${path}`, { params })
        .then((response : any) => {
            if (response.status === 200 && cb) {
                cb(response.data);
            } else {
                if (err) {
                    err(response.error);
                }
            }
        })
        .catch(function(error) {
            if (
                (error &&  (error.status === 404 || error.status === 400))
            ) {
                if (err) {
                    err(error.message);
                }
                message.error('Connection Error!');
                return;
            }
            if (error && error.status === 401) {
                message.warning('Unauthorised request! You will be logged out.');
            }
            message.warning('Something went wrong!!');
        });
};

const apiPost = ({ path, params, headers, cb, err } : { path: string, params: any, headers?: any, cb: any, err: any }) => {
	axios
        .post(`${BASE_URL}${path}`, params)
        .then(function(response) {
            if ((response.status === 200 || response.status === 201) && cb) {
                cb(response.data);
            } else {
                err(response);
            }
        })
        .catch(function(error) {
            if (error.status === 404 || error.status === 400) {
                if (err) {
                    err(error.message);
                }
                return;
            }
            if (error && error.status === 401) {
                message.warning('Unauthorised request! You will be logged out.');
                return;
            }
            message.warning('Something went wrong!!');
        });
};


// Posts

export const preview = (params: string, cb: any, err: any) => {
	apiGet({
		path: '/preview/' + params,
		params,
		cb,
        err
	});
};

export const publishImage = (params: any, cb?: any , err?: any) => {
	apiPost({
		path: '/api/general/publish',
		params,
		cb,
		err,
	});
};
