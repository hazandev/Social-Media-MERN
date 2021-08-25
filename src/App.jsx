import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes.js";
import { Topbar } from "./cmps/Topbar";
import { useSelector } from "react-redux";
import { LoginSignup } from "./pages/LoginSignup.jsx";
export function App() {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  return (
    <div className="app">
      {loggedInUser && (
        <Router>
          <Topbar />
          <main className="container">
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  component={route.component}
                  path={route.path}
                />
              ))}
            </Switch>
          </main>
        </Router>
      )}
      { !loggedInUser && <LoginSignup/> }
    </div>
  );
}
