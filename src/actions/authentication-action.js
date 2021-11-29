import {LOGIN_USER, REGISTER_USER} from "../utils/constant";

export const registerUserAction = (user) => {
    return {
        type: REGISTER_USER,
        user
    }
}

export const loginUserAction = (user) => {
    return {
        type: LOGIN_USER,
        user
    }
}
