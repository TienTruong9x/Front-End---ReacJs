import {combineReducers} from 'redux';
import tasks from './task';

const myReducer = combineReducers({
    tasks:tasks,
});

export default myReducer;