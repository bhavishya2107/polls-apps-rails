import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "components/Login";
import Signup from "components/SignUp";
import Polls from "components/Polls";
import CreatePollForm from "components/Polls/Form/CreatePollForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Polls} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/polls/create" component={CreatePollForm}/>
      </Switch>
    </Router>
  );
};

export default App;
