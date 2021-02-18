import {ADD_EXPIRENCE, health, MINUS_HEALTH} from "./types";

const initialState = {
    infoPerson: {
        name: 'Daniil',
        level: 1,
        health: 50,
        expirince: 50,
        class: 'Воин'
    }
}

export const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPIRENCE:
            if (state.infoPerson.expirince < 100) {
                return {...state, infoPerson: action.payload}

            } else {
                state.infoPerson.level++
                state.infoPerson.expirince = 0
                state.infoPerson.health = 100
            }
            return state
        case MINUS_HEALTH:
            if (state.infoPerson.health === 0 && state.infoPerson.level > 1) {
                state.infoPerson.level--
                state.infoPerson.expirince = 0
                state.infoPerson.health = 100

            } else if (state.infoPerson.level >= 1 && state.infoPerson.health !== 0){
                return {...state, infoPerson: action.payload}
            }
            return state

        default:
            return state
    }
}
