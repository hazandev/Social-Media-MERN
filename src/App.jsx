import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes.js";
import { useEffect } from "react";
import { dataService } from "./services/generalService/dataService.js";
export function App() {
  useEffect(() => {
    console.log('App mount');
    dataService.initData();
    return () => {
      console.log('Unmount app');
      dataService.removeData()
    }
  }, [])

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
