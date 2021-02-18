import {ADD_EXPIRENCE, ADD_HABBIT, MINUS_HEALTH} from "./types";

export function createHabbit(habbit){
    return {
        type:ADD_HABBIT,
        payload:habbit
    }
}

export function minusHealth(data){
    return {
        type:MINUS_HEALTH,
        payload:data
    }
}

export function addExpirence(data){
    return{
        type:ADD_EXPIRENCE,
        payload:data
    }
}