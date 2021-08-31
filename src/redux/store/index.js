import {createStore,applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import {reducer} from "../reducers/reducer";

export let store = createStore(reducer, applyMiddleware(ReduxThunk));