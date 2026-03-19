import { combineReducers, legacy_createStore } from "redux";
import {AuthReducer} from '../Redux/Auth/Reducer';
import { TodoReducer } from "../Redux/todos/Reducer";

const rootTerminal= combineReducers({
    auth:AuthReducer,
    todo: TodoReducer
})

const ownStore = legacy_createStore(rootTerminal, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {ownStore};