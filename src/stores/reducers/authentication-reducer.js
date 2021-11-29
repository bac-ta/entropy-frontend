import {LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS} from "../../utils/constant";

export const loginReducer = (state = [], action) => {
    const response = action.data;
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state, response};
        case LOGIN_USER_ERROR:
            return {...state, response};
        default:
            return state;
    }
}

export const registerReducer = (state = [], action) => {
    const response = action.data;
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {...state, response};
        case REGISTER_USER_SUCCESS:
            return {...state, response};
        default:
            return state;
    }
}

