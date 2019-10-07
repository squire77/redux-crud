export const SET_VIEW = 'SET_VALUE'
export const ADD_PERSON = 'ADD_PERSON'
export const EDIT_PERSON = 'EDIT_PERSON'
export const DELETE_PERSON = 'DELETE_PERSON'
export const SET_EDIT_VIEW = 'SET_EDIT_VIEW'

export const setView = (view) => {
    return {
        type: SET_VIEW,
        view
    }
}

export const setEditView = (person, view) => {
    console.log(person.id)
    return {
        type: SET_EDIT_VIEW,
        person,
        view
    }
}

export const addPerson = (firstName, lastName) => {
    return {
        type: ADD_PERSON,
        firstName,
        lastName
    }
}

export const editPerson = (person) => {
    return {
        type: EDIT_PERSON,
        person
    }
}

export const deletePerson = (id) => {
    return {
        type : DELETE_PERSON,
        id
    }
}