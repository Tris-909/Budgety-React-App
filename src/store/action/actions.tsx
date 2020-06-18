import * as actionTypes from './actionsTypes';

export const addPersonPlus = (newItem: object) => {
    return {
        type: actionTypes.ADD_PERSON_PLUS,
        newItem: newItem
    }
}

export const addPersonMinus = (newItem: object) => {
    return {
        type: actionTypes.ADD_PERSON_MINUS,
        newItem: newItem
    }
}

export const deletePersonPlus = (id: number) => {
    return {
        type: actionTypes.REMOVE_PERSON_PLUS,
        id: id
    }
}

export const deletePersonMinus = (id: number) => {
    return {
        type: actionTypes.REMOVE_PERSON_MINUS,
        id: id
    }
}