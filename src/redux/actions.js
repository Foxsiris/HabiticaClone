import {ADD_HABBIT} from "./types";

export function createHabbit(habbit){
    return {
        type:ADD_HABBIT,
        payload:habbit
    }
}