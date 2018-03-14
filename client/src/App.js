import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import SingleUser from './components/SingleUser'
//import UpdateUser from './components/UpdateUser'
class App extends Component {
  

   
  render () {
    const ProjectWrapper = (props) => {
      return <SingleUser {...props}/>
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Users}/>
            <Route path="/:id" render={ProjectWrapper}/> 
            {/* <Route exact path="/:id" component={UpdateUser}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App