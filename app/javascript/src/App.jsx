import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "components/Login";
import Signup from "components/SignUp";
import Polls from "components/Polls";
import CreatePollForm from "components/Polls/Form/CreatePollForm";
import { setAuthHeaders } from "apis/axios";
import Poll from "components/Polls/Poll";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="text-4xl text-center">
        <h1>Loading App...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Polls} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/polls/create" component={CreatePollForm} />
        <Route exact path="/polls/show/:poll_id" component={Poll} />
      </Switch>
    </Router>
  );
};

export default App;
