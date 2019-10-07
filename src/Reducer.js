import { SET_VIEW, ADD_PERSON, EDIT_PERSON, DELETE_PERSON, SET_SELECTED_PERSON } from './actions'
import uuid from 'uuid'

const initialState = {
    people: [
        { firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779' },
        { firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2' }
    ],
    view: 'PersonList',
    selectedPerson: undefined
}

const reducer = (prevState = undefined, action) => {
    switch (action.type) {
        case SET_VIEW:
            console.log("reducer: set view")
            debugger
            //return Object.assign({}, prevState, {view: action.view})
            return { ...prevState, view: action.view }
        case ADD_PERSON:
            console.log("reducer: add person")
            return {
                people: [
                    ...prevState.people,
                    { id: uuid(), firstName: action.firstName, lastName: action.lastName }
                ],
                view: 'PersonList',
                selectedPerson: undefined
            }
        case EDIT_PERSON:
            console.log("reducer: edit person")
            return {
                people: prevState.people.map((person) => {
                    return (person.id === action.id) ?
                        { ...person, firstName: action.firstName, lastName: action.lastName } : person
                }),
                view: 'PersonList',
                selectedPerson: undefined
            }
        case DELETE_PERSON:
            console.log("reducer: delete person")
            return {
                people: prevState.people.filter(person => person.id !== action.id),
                view: 'PersonList',
                selectedPerson: undefined
            }
        case SET_SELECTED_PERSON:
            console.log("reducer: set selected person")
            return {
                ...prevState,
                selectedPerson: {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    id: action.id
                }
            }
        default:
            return { ...prevState }
    }
}

export { reducer, initialState }