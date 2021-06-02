import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { register } from './register';
import { alert } from './alert';


const rootReducer = combineReducers({
    authentication,
    register,
    alert,
});

export default rootReducer;