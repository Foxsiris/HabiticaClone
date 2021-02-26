import {ADD_TODO_EVERY_DAY} from "./types";

const initialState = {
    todo: []
}

export const todoEveryDayReducer = (state = initialState, action) => {
        switch (action.type){
            case ADD_TODO_EVERY_DAY:
                return{...state,todo: state.todo.concat([action.payload])}
        }
        return state
}

