import {combineReducers} from "redux";
import usersReducer from "../usersReducer";
import {quoteReducer} from "./quotereducer";

export const rootReducer = combineReducers({
    usersReducer,
    quoteReducer,
})