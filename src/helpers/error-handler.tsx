import { alertActions } from "../actions/alert";

function errorResponseHandler(error:any) {
    // check for errorHandle config
    if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
        return Promise.reject(error);
    }
    // if has response show the error
    if (error.response) {
        return (dispatch:Function) => {
            dispatch(alertActions.error(error.message));
        }       
    }
}

export {errorResponseHandler};


