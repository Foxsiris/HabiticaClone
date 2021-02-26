import {combineReducers} from "redux";
import {habbitReducer} from "./habbitReducer";
import {personReducer} from "./personReducer";
import {todoEveryDayReducer} from "./todoEvereDayReducer";

export const rootReducer = combineReducers({
    habbit:habbitReducer,
    infoPerson:personReducer,
    todo:todoEveryDayReducer
})