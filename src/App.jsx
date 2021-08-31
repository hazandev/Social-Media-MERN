import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes.js";
export function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  component={route.component}
                  path={route.path}
                />
              ))}
            </Switch>
        </Router>
    </div>
  );
}
