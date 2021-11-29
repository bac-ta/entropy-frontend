import {all} from 'redux-saga/effects';
import forkAuthentication from "./watcher";

export default function* rootSaga() {
    yield all([
        forkAuthentication()
    ]);
}
