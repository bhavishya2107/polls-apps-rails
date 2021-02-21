import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "components/Login";
import Signup from "components/SignUp";
import Polls from "components/Polls";
import CreatePollForm from "components/Polls/Form/CreatePollForm";
import { setAuthHeaders } from "apis/axios";
import Poll from "components/Polls/Poll";
import NavBar from "components/NavBar";
import PrivateRoute from "components/common/PrivateRoute";
import { either, isEmpty, isNil } from "ramda";
import { getFromLocalStorage } from "./helpers/storage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";

  useEffect(() => {
    setAuthHeaders();
    setLoading(false);
    console.log(isLoggedIn);
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
      <NavBar isLoggedIn={isLoggedIn}/>
      <Switch>
        <Route exact path="/" component={Polls} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/polls/show/:poll_id" component={Poll} />
        <PrivateRoute
          exact
          path="/create"
          redirectRoute="/login"
          component={CreatePollForm}
          condition={isLoggedIn}
        />
      </Switch>
    </Router>
  );
};

export default App;
