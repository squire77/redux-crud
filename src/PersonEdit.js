import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPerson, deletePerson, setView } from './actions'

class PersonEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: props.selectedPerson.firstName,
      lastName: props.selectedPerson.lastName,
      id: props.selectedPerson.id
    }
  }

  goHome = () => {
    this.props.setView('PersonList')
  }

  saveChanges = () => {
    this.props.editPerson(this.state)
  }

  deletePerson = () => {
    this.props.deletePerson(this.state.id)
  }

  changeFirstName = (event) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.firstName = event.target.value // text in the box
    super.setState(newState)
  }

  changeLastName = (event) => {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.lastName = event.target.value // text in the box
    super.setState(newState)
  }

  render() {
    return (
      <div className="PersonEdit">
        <span>Editing Person</span>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.changeFirstName} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.changeLastName} />
        <div className="PersonEditBtns">
          <button className="button-primary" onClick={() => this.saveChanges()}>SAVE</button>
          <button className="button-primary" onClick={() => this.goHome()}>CANCEL</button>
          <button className="button-primary danger" onClick={this.deletePerson}>DELETE PERSON</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ selectedPerson: state.selectedPerson })
const mapDispatchToProps = dispatcher => ({
  editPerson: state => dispatcher(editPerson(state.firstName, state.lastName, state.id)),
  deletePerson: id => dispatcher(deletePerson(id)),
  setView: view => dispatcher(setView(view))
})
export default connect(mapStateToProps, mapDispatchToProps)(PersonEdit)
