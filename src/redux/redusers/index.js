import {someReducer} from "./someReduser";
import {reducer} from "./reducer";
import {combineReducers} from 'redux';


const rootReducer = combineReducers({someReducer,reducer});
export {rootReducer }