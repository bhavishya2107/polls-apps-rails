import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "components/Login";
import Signup from "components/SignUp";
import Polls from "components/Polls";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Polls />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/signup" render={() => <Signup />} />
      </Switch>
    </Router>
  );
};

export default App;
