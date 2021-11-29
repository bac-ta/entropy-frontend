import {constants} from "http2";

export const ACCESS_TOKEN_KEY = 'access_token';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const ERROR_STATUS_LIST = [
    constants.HTTP_STATUS_UNAUTHORIZED,
    constants.HTTP_STATUS_FORBIDDEN,
    constants.HTTP_STATUS_INTERNAL_SERVER_ERROR
];
