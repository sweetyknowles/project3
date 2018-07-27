import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');
@import url('https://fonts.googleapis.com/css?family=Niconne');
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
            {/* <Route path="/:id" render={ProjectWrapper} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
