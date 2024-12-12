import courseReducer from './courses';
import loggedReducer from './courses';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    courses : courseReducer,
    // isLogged: loggedReducer
})

export default allReducers;