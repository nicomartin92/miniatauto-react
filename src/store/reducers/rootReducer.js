import authReducer from './authReducer';
import projectReducer from './projectReducer';
import carReducer from './carReducer';

/* firestore */
import { firestoreReducer } from 'redux-firestore';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    authR: authReducer,
    projectR: projectReducer,
    carR: carReducer,
    firestore: firestoreReducer
});

export default rootReducer;