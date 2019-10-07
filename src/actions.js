export const SET_VIEW = 'SET_VALUE'
export const ADD_PERSON = 'ADD_PERSON'
export const EDIT_PERSON = 'EDIT_PERSON'
export const DELETE_PERSON = 'DELETE_PERSON'
export const SET_SELECTED_PERSON = 'SET_SELECTED_PERSON'

export const setView = (view) => {
    return {
        type: SET_VIEW,
        view
    }
}

export const setSelectedPerson = (firstName, lastName, id) => {
    return {
        type: SET_SELECTED_PERSON,
        firstName,
        lastName,
        id
    }
}

export const addPerson = (firstName, lastName) => {
    return {
        type: ADD_PERSON,
        firstName,
        lastName
    }
}

export const editPerson = (firstName, lastName, id) => {
    return {
        type: EDIT_PERSON,
        firstName,
        lastName,
        id
    }
}

export const deletePerson = (id) => {
    return {
        type : DELETE_PERSON,
        id
    }
}