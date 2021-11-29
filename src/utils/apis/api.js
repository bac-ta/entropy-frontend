import axios from 'axios';
import authenticationService from "../../services/authentication-service";
import {constants} from "http2";
import LRU from 'lru-cache';
import {configure} from 'axios-hooks';
import {ERROR_STATUS_LIST} from "../constant";
import configureStore from "../../stores";

const makeHttpCalling = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 6000
});

makeHttpCalling.interceptors.request.use(
    config => {
        const token = authenticationService.getAccessToken();
        if (token && config && config.url !== 'auth/login' && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

makeHttpCalling.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalConfig = error.config;
        if (
            error.response && error.response.status === constants.HTTP_STATUS_OK && originalConfig.url !== 'auth/login'
        ) {
            //Logout
            configureStore.dispatch(authActions.logout());
        }

        return Promise.reject(error);
    });

const cache = new LRU({max: 10});

configure({axios: makeHttpCalling, cache});

const callGet = (url, params) => {
    const options = {
        headers: {
            Authorization: `Bearer ${authenticationService.getAccessToken()}`,
            params,
        },
    };
    return makeHttpCalling
        .get(url, options)
        .then(res => {
            if (ERROR_STATUS_LIST.includes(+res.data.status)) {
                throw res;
            } else {
                return res;
            }
        })
        .catch(err => {
                if (constants.HTTP_STATUS_UNAUTHORIZED === +err.response.status)
                    configureStore.dispatch(authActions.logout());
                throw err;
            }
        )
}

export {
    makeHttpCalling
}
