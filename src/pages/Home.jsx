import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "../cmps/Sidebar";
import { Topbar } from "../cmps/Topbar";
import { sidebarRoutes } from "../routes.js";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "./Search";
import { useEffect } from "react";
export const Home = () => {
  const searchText = useSelector((state) => state.uiModule.searchText);
  const dispatch = useDispatch();
  const stateHamburger = useSelector((state) => state.uiModule.toggleMenuPhone);
  const classContainer = stateHamburger ? "" : "modal";

  const closeMenu = () => {
    console.log(stateHamburger);
    if (!stateHamburger) {
      dispatch({ type: "CLOSE_MENU_PHONE" });
    }
  };

  return (
    <Router>
      <Topbar />
      <div
        className={`containerWrapper ${classContainer}`}
        onClick={() => {
          closeMenu();
        }}
      >
        <div className='container'>
          <Sidebar />
          {searchText.length === 0 ? (
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
          ) : (
            <div className="searchRoute w-100">
              <Search />
            </div>
          )}
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
      </div>
    </Router>
  );
};
