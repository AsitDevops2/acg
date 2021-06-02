import { commonConstants } from '../constants';
import { alertActions } from './alert';
import { history } from '../helpers';
import {fetch} from '../helpers';
import { AxiosResponse } from 'axios';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
    updateOrCreateUser,
    getById,
    updateUserProfile
};

function login(email:String, password:String) {
    return (dispatch:Function) => {
        dispatch(request({ email }));
        fetch({
        method: 'post',
        url: 'auth/signin',
        data: { email,password}
    }).then(function (response) {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch(success(response.data));
        dispatch(alertActions.success('Login successfully..'));
        history.push('/');  
    }).catch(error=>{
        dispatch(alertActions.error(error.message));
        dispatch(failure(error.message));
    });
   
    function request(req: { email: String; }) { return { type: commonConstants.LOGIN_REQUEST, req } }
    function success(res: AxiosResponse<any>) { return { type: commonConstants.LOGIN_SUCCESS, res } }
    function failure(error: any) { return { type: commonConstants.LOGIN_FAILURE, error } }
 } 
}

function logout() {
    return (dispatch:Function) => {
        localStorage.removeItem('user');;
        dispatch(alertActions.success('Logged out..'));
    }
}

function register(user: any) {
    return (dispatch:Function) => {
        dispatch(request(user));
        fetch({
            method: 'post',
            url: 'auth/signup',
            data: user
        }).then(function (response) {
            dispatch(success(response));
            dispatch(alertActions.success('Registered successfully..'));
            history.push('/login');
        }).catch(error=>{
            dispatch(alertActions.error(error.message));
            dispatch(failure(error.message));
        });
      
    };

    function request(req: any) { return { type: commonConstants.REGISTER_REQUEST, req } }
    function success(res: AxiosResponse<any>) { return { type: commonConstants.REGISTER_SUCCESS, res } }
    function failure(error: any) { return { type: commonConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return (dispatch:Function) => {
        dispatch(request());
        fetch({
            method: 'get',
            url: 'users/get'   
        }).then(function (response) {
            dispatch(success(response));
        }).catch(error=>{
            dispatch(alertActions.error(error.message));
            dispatch(failure(error.message));
        });
      
    };
    function request() { return { type: commonConstants.GETALL_REQUEST } }
    function success(res: AxiosResponse<any>) { return { type: commonConstants.GETALL_SUCCESS, res } }
    function failure(error: any) { return { type: commonConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id: any) {
    return (dispatch:Function) => {
        dispatch(request(id));
        fetch({
            method: 'delete',
            url: 'user/delete',
            params: { id: id } 
        }).then(function (response) {
            dispatch(success(id));
            dispatch(alertActions.success('Deleted successfully..'));
        }).catch(error=>{
            dispatch(alertActions.error(error.message));
            dispatch(failure(id,error.message));
        });
      
    };
    function request(id: any) { return { type: commonConstants.DELETE_REQUEST, id } }
    function success(id: any) { return { type: commonConstants.DELETE_SUCCESS, id } }
    function failure(id: any, error: any) { return { type: commonConstants.DELETE_FAILURE, id, error } }
}

function updateOrCreateUser(user: any) {
    return (dispatch:Function) => {
        dispatch(request(user));
        fetch({
            method: 'post',
            url: 'user/save',
            data: user
        }).then(function (response) {
            dispatch(alertActions.success('User saved successfully..'));
            dispatch(success(response));
            history.go(-1); 
        }).catch(error=>{
            dispatch(alertActions.error(error.message));
            dispatch(failure(user,error.message));
        });
    };
    function request(req: any) { return { type: commonConstants.SAVE_REQUEST, req } }
    function success(res: AxiosResponse<any>) { return { type: commonConstants.SAVE_SUCCESS, res } }
    function failure(req: any, error: any) { return { type: commonConstants.SAVE_FAILURE, req, error } }
}

function getById(id: any) {
    
    return (dispatch:Function) => {
        dispatch(request(id));
        fetch({
            method: 'delete',
            url: 'user/get',
            params: { id: id } 
        }).then(function (response) {
            dispatch(success(id));
        }).catch(error=>{
            dispatch(alertActions.error(error.message));
            dispatch(failure(id,error.message));
        });
      
    };

    function request(id: any) { return { type: commonConstants.GET_REQUEST, id } }
    function success(res: any) { return { type: commonConstants.GET_SUCCESS, res } }
    function failure(id: any, error: any) { return { type: commonConstants.GET_FAILURE, id, error } }
}
function updateUserProfile(user: any) {
    return (dispatch:Function) => {
        dispatch(request(user));
        fetch({
            method: 'post',
            url: 'user/save',
            data: user
        }).then(function (response) {
            dispatch(alertActions.success('Profile updated successfully..'));
            dispatch(success(response));
            history.go(-1); 
        }).catch(error=>{
            dispatch(alertActions.error(error.message));
            dispatch(failure(user,error.message));
        });
    };
    function request(req: any) { return { type: commonConstants.SAVE_REQUEST, req } }
    function success(res: AxiosResponse<any>) { return { type: commonConstants.SAVE_SUCCESS, res } }
    function failure(req: any, error: any) { return { type: commonConstants.SAVE_FAILURE, req, error } }
}