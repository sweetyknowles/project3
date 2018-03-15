import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import Home from './components/Login/Home'
import LoginPage from './components/Login/LoginPage'

import NavBar from "./components/styled-components/NavBar";
import { injectGlobal } from "styled-components";
import UpdateUser from './components/UpdateUser'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');
@import url('https://fonts.googleapis.com/css?family=Niconne')
</style>
`;

class App extends Component {
  render() {
    const ProjectWrapper = props => {
      return <SingleUser {...props} />;
    };

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/:id" render={ProjectWrapper} />
            {/* <Route exact path="/:id" component={UpdateUser}/>  */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
