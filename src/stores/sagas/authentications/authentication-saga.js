import {constants} from "http2";
import {call, put} from 'redux-saga/effects';
import authenticationService from "../../../services/authentication-service";
import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from "../../../utils/constant";

export function* handleLogin(payload) {
    try {
        const loginResult = yield call(authenticationService.doLogin, payload);
        const statusCode = loginResult.statusCode;
        const data = loginResult.data;
        if (statusCode == constants.HTTP_STATUS_OK)
            yield [put({type: LOGIN_USER_SUCCESS, data})];
        else
            yield put({type: LOGIN_USER_ERROR, data});
    } catch (error) {
        yield put({type: LOGIN_USER_ERROR, error});
    }
}

function* handleLogout() {

}

export function* handleRegister(payload) {
    try {
        const data = yield call(authenticationService.doRegisterUser, payload);
        yield [put({type: REGISTER_USER_SUCCESS, data})]
    } catch (error) {
        yield put({type: REGISTER_USER_ERROR, error});
    }
}
