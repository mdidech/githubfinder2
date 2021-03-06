import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";

import Search from "./components/users/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);

  // useEffect(
  //   // eslint-disable-next-line
  //   async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     setUsers(res.data);
  //     setLoading(false);
  //     // eslint-disable-next-line
  //   },
  //   []
  // );

  const setAlerts = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 4000);
  };
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' />

          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={setAlerts} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
