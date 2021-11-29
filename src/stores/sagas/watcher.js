import {fork, takeLatest} from 'redux-saga/effects';
import {handleLogin, handleRegister} from "./authentications/authentication-saga";
import {LOGIN_USER, REGISTER_USER} from "../../utils/constant";

function* watcherSagas() {
    yield takeLatest(REGISTER_USER, handleLogin);
    yield takeLatest(LOGIN_USER, handleRegister);
}

export default function* forkAuthentication() {
    yield fork(watcherSagas);
}
