import {ADD_HABBIT} from "./types";

const initialState = {
    habbit: []
}

export const habbitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABBIT:
            return {...state, habbit: state.habbit.concat([action.payload])}

        default:return state
    }
    return state
}