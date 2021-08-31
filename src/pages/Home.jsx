// import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "../cmps/Sidebar";
import { Rightbar } from "../cmps/Rightbar";
import { Topbar } from "../cmps/Topbar";
import { Feed } from "../cmps/Feed";
import { Course } from "../cmps/Course";
import { Question } from "../cmps/Question";
import { Profile } from "../cmps/Profile";
// import {sidebarRoutes} from '../routes.js'

// export const Home = () => {
//   return (
//     <div className="home">
//       <Topbar />
//       <div className="container">
//         <Sidebar />
//         <Switch>{()=>{debugger}}
//             {sidebarRoutes.map((route, index) => (
//               <Route
//                 key={index}
//                 path={route.path}
//                 // exact={route.exact}
//               />
//             ))}
//           </Switch>
//         <Rightbar />
//       </div>
//     </div>
//   );
// };

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Courses } from "../data/dummyData";

const routes = [
  {
    path: "/home/feed",
    exact: true,
    main: () => <Feed/>
  },
  {
    path: "/home/course",
    main: () => <Course/>
  },
  {
    path: "/home/question",
    main: () => <Question/>
  },
  {
    path: "/:id",
    main: () => <Profile/>
  }
];

export const Home = () => {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
      <Rightbar/>
      </div>
    </Router>
  );
}
