import {combineReducers} from "redux";
import {habbitReducer} from "./habbitReducer";

export const rootReducer = combineReducers({
    habbit:habbitReducer
})