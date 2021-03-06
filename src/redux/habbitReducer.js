import {ADD_HABBIT, CHANGE_HABBIT, DELETE_HABBIT} from "./types";

const initialState = {
    habbit: [],
}

export const habbitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABBIT:
            return {...state, habbit: state.habbit.concat([action.payload])}
        case CHANGE_HABBIT: {
            let changedHabbit = state.habbit.map(el => {
                return el.id === action.payload.id ? {title: action.payload.title, id: action.payload.id,type:action.payload.type,complexity:action.payload.complexity} : el
            })
            return {...state, habbit: changedHabbit}
        }
        case DELETE_HABBIT: {
            const habbitAfterDelete = state.habbit.filter(el => {
                return el.id !== action.payload
            })
            return {...state, habbit: habbitAfterDelete}
        }
        default:
            return state
    }
    return state
}