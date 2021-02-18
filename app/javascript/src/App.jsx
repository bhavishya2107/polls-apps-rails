import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" render={() => <div>Home</div>} />
    //     <Route exact path="/about" render={() => <div>About</div>} />
    //   </Switch>
    // </Router>
    <div>
      <h1 className="text-2xl text-center">Polls App</h1>
    </div>
  );
};

export default App;
