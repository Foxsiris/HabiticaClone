import {ADD_EXPIRENCE, ADD_HABBIT, CHANGE_HABBIT, DELETE_HABBIT, MINUS_HEALTH} from "./types";

export function createHabbit(habbit){
    return {
        type:ADD_HABBIT,
        payload:habbit
    }
}

export function changeHabbit(habbit){
    return {
        type:CHANGE_HABBIT,
        payload:habbit
    }
}
export function deleteHabbit(habbit){
    return {
        type:DELETE_HABBIT,
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