import {createStore} from "redux";
import {rootReducer} from "../redusers";

export let store = createStore(rootReducer);