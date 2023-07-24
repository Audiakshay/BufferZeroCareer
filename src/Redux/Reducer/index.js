import { combineReducers } from 'redux';
import LoginReducers from './LOginReducers';


const rootReducer = combineReducers({
    login: LoginReducers,
});

export default rootReducer;