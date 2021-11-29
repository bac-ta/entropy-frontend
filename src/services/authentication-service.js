import {makeHttpCalling} from "../utils/apis/api";
import {ACCESS_TOKEN_KEY} from "../utils/constant";
import {constants} from "http2";

const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

const setAccessToken = (value) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, value);
}

const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

const doLogin = async (request) => {
    let formData = new FormData();
    let data = {}
    let statusCode = constants.HTTP_STATUS_OK;

    formData.append('username', request.username)
    formData.append('password', request.password)
    await makeHttpCalling({
        url: '/auth/login',
        method: 'POST',
        data: formData
    }).then(response => {
        data = response.data;
    }).catch(error => {
        statusCode = error.response.status;
    });
    return {
        data,
        statusCode
    }
}

const doRegisterUser = async (request) => {
    let jsonResult = {};

    await makeHttpCalling({
        url: '/auth/register',
        method: 'POST',
        body: JSON.stringify(request)
    }).then(response => {
        jsonResult = response.data;
        return jsonResult;
    });
}

const authenticationService = {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    doLogin,
    doRegisterUser
}
export default authenticationService;
