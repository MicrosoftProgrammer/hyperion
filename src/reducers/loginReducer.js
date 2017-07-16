import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../actions/loginActions.js';

const initialState = {
    user: {
        Id: "",
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        ETag: 1492777463
    },
    isLoading: true
};
export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.user,
                isLoading: false
            });
        case USER_LOGIN_FAILURE:
            return Object.assign({}, state, {
                isLoading: true
            });
        default:
            return state;
    }
}