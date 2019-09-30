import React, {Component} from 'react'
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import PersonAdd from './PersonAdd'
import Nav from './Nav'
import './styles/App.css'
import './skeleton.css'
import uuid from'uuid4'

class App extends Component {
  state = {
    people: [
      {firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779'},
      {firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2'}
    ],
    view: 'PersonList',
    selectedPerson: undefined
  }

  goToPersonEdit = (person) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.view = 'PersonEdit'
    newState.selectedPerson = person
    this.setState(newState)
  }

  goToPersonAdd = () => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.view = 'PersonAdd'
    this.setState(newState)
  }

  goHome = () => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.view = 'PersonList'
    newState.selectedPerson = undefined
    this.setState(newState)
  }

  changeFirstName = (event) => {
    const newState = this.state
    newState.selectedPerson.firstName = event.target.value // text in the box
    this.setState(newState)
  }

  changeLastName = (event) => {
    const newState = this.state
    newState.selectedPerson.lastName = event.target.value // text in the box
    this.setState(newState)
  }

  saveChanges = (updatedPerson) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.people = this.state.people.map((person) => {
      if (person.id === updatedPerson.id) {
        return updatedPerson
      } else return person
    })
    newState.view = 'PersonList'
    newState.selectedPerson = undefined
    this.setState(newState)
  }

  deletePerson = () => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.people = this.state.people.filter(person => person.id !== this.state.selectedPerson.id)
    newState.view = 'PersonList'
    newState.selectedPerson = undefined
    this.setState(newState)
  }

  saveNewPerson = (newPerson) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newPerson.id = uuid()
    newState.people.push(newPerson)
    newState.view = 'PersonList'
    newState.selectedPerson = undefined
    this.setState(newState)
  }

  render() {
    let currentView
    if (this.state.view === 'PersonList') {
      currentView =
        <PersonList people={this.state.people} goToPersonEdit={this.goToPersonEdit} goToPersonAdd={this.goToPersonAdd}/>
    } else if (this.state.view === 'PersonAdd') {
      currentView = <PersonAdd goHome={this.goHome} saveNewPerson={this.saveNewPerson}/>
    } else {
      currentView = <PersonEdit selectedPerson={this.state.selectedPerson}
                                saveChanges={this.saveChanges}
                                goHome={this.goHome}
                                deletePerson={this.deletePerson}/>
    }

    return (
      <div className="main">
        <Nav/>
        {currentView}
      </div>
    )
  }
}

export default App
