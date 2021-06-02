import { commonConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user') || "{}");

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action:any) {
    switch (action.type) {
        case commonConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case commonConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case commonConstants.LOGIN_FAILURE:
            return {};
        case commonConstants.LOGOUT:
            return {};
        default:
            return state
    }
}