import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPerson, setView } from './actions'

class PersonAdd extends Component {

  state = {
    firstName: '',
    lastName: '',
    id: 0
  }

  goHome = () => {
    this.props.setView('PersonList')
  }

  saveNewPerson = () => {
    this.props.addPerson(this.state.firstName, this.state.lastName)
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
      <div className="PersonAdd">
        <span>Add a Person</span>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={this.state.firstName}
               id="firstName"
               onChange={this.changeFirstName}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={this.state.lastName}
               id="lastName"
               onChange={this.changeLastName}/>
        <div className="PersonAddBtns">
          <button className="button-primary" onClick={() => this.saveNewPerson()}>SAVE</button>
          <button className="button-primary" onClick={() => this.goHome()}>CANCEL</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ( { selectedPerson: state.selectedPerson } )
const mapDispatchToProps = dispatcher => ({
  addPerson: (first, last) => dispatcher(addPerson(first, last)),
  setView: view => dispatcher(setView(view))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonAdd)
