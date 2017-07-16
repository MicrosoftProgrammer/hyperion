import { combineReducers } from 'redux';
import { LoginReducer } from './loginReducer';
import { ProjectReducer } from './projectReducer';

const appReducer = combineReducers({
    LoginReducer,
    ProjectReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;  