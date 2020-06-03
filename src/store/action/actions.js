import * as actionTypes from './actionsTypes';

export const addPersonPlus = (newItem) => {
    return {
        type: actionTypes.ADD_PERSON_PLUS,
        newItem: newItem
    }
}

export const addPersonMinus = (newItem) => {
    return {
        type: actionTypes.ADD_PERSON_MINUS,
        newItem: newItem
    }
}