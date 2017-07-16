import LoginAPI from '../api/loginAPI';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
function userloginRequest() {
    return { type: USER_LOGIN_REQUEST };
}

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
function userLoginSuccess(response) {
    return { type: USER_LOGIN_SUCCESS, user: response };
}

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
function userLoginFailure() {
    return { type: USER_LOGIN_FAILURE };
}

export function login() {
    return function (dispatch) {
        dispatch(userloginRequest());
        return LoginAPI.loginUser().then((user) => {
            dispatch(userLoginSuccess(user));
        }).catch(error => {
            dispatch(userLoginFailure());
        });
    }
}

