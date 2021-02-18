import {combineReducers} from "redux";
import {habbitReducer} from "./habbitReducer";
import {personReducer} from "./personReducer";

export const rootReducer = combineReducers({
    habbit:habbitReducer,
    infoPerson:personReducer
})