import React, { Component } from "react";
import { withRouter, Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React-Node-SQL App</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/customerslist" component={CustomersList} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
