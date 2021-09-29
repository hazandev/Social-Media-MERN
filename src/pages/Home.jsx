import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "../cmps/Sidebar";
import { Topbar } from "../cmps/Topbar";
import { sidebarRoutes } from "../routes.js";
import { useSelector } from "react-redux";
import {Search} from './Search'
import { useEffect } from "react";
export const Home = () => {
  const searchText = useSelector((state) => state.uiModule.searchText);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        {searchText.length === 0 ? 
          <div className="centerContent">
            <Switch>
              {sidebarRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        :
         <div className="w-100">
           <Search/>
         </div>
        
        }
            <Switch>
              {sidebarRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.right />}
                />
              ))}
            </Switch>
      </div>
    </Router>
  );
};
