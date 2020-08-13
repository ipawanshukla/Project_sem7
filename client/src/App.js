import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import login from "./Login/login";
import Dash from "./Dashboard/Dash";
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"></Redirect>
        </Route>
        <Route exact path="/login" component={login} />
        <Route exact path="/dash" component={Dash} />
        <Route exact path="*" render={() => "404 Not Found"} />
      </Switch>
    );
  }
}

export default App;
