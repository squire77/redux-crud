import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setView, setSelectedPerson } from './actions'

class PersonList extends Component {

  handleAdd = () => {
    console.log("handleAdd:")
    this.props.setView("PersonAdd")
  }

  handleEdit = (person) => {
    console.log("handleEdit " + person)
    this.props.setSelectedPerson(person)
    this.props.setView("PersonEdit")
  }

  render() {
    return (
      <div>
        <ul className="PersonList">
          {this.props.people.map((person) =>
            <li key={person.id}
                onClick={() => this.handleEdit(person)}>{person.firstName} {person.lastName}</li>)}
        </ul>
        <button className="button-primary" onClick={() => this.handleAdd()}>
          Add a Person
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ( { people: state.people } )
const mapDispatchToProps = dispatcher => ({
  setView: view => dispatcher((setView(view))),
  setSelectedPerson: person => dispatcher((setSelectedPerson(person.firstName, person.lastName, person.id)))
})
export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
