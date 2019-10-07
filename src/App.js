import React, {Component} from 'react'
import { connect } from 'react-redux'
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import PersonAdd from './PersonAdd'
import Nav from './Nav'
import './styles/App.css'
import './skeleton.css'

class App extends Component {

  render() {
    let currentView
    if (this.props.view === 'PersonList') {
      currentView = <PersonList/>
    } else if (this.props.view === 'PersonAdd') {
      currentView = <PersonAdd/>
    } else {
      currentView = <PersonEdit/>
    }

    return (
      <div className="main">
        <Nav/>
        {currentView}
      </div>
    )
  }
}

const mapStateToProps = state => ( {view: state.view} )
export default connect(mapStateToProps)(App)
