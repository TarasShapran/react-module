import {createStore, applyMiddleware} from "redux";
import {reducer} from "../redusers/reduser";
import ReduxThunk from "redux-thunk";

export let store = createStore(reducer,applyMiddleware(ReduxThunk));
