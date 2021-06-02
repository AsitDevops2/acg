import { commonConstants } from '../constants';

export function register(state = {}, action:any) {
    switch (action.type) {
        case commonConstants.REGISTER_REQUEST:
            return { registering: true };
        case commonConstants.REGISTER_SUCCESS:
            return {};
        case commonConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}