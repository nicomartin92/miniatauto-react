import authReducer from './authReducer';
import projectReducer from './projectReducer';
import carReducer from './carReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    authR: authReducer,
    projectR: projectReducer,
    carR: carReducer
});

export default rootReducer;