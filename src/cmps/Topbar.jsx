import { NavLink } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">VibeTech</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search />
          <input type="text" placeholder="Search for friend, post or video " />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon">
            <Person className="icon"/>
            <span className="topbar-badge">1</span>
          </div>
          <div className="topbar-icon">
            <Chat className="icon"/>
            <span className="topbar-badge">2</span>
          </div>
          <div className="topbar-icon">
            <Notifications className="icon"/>
            <span className="topbar-badge">3</span>
          </div>
        </div>
        <img src="./assets/img/person/5.jpeg" alt=""/>
      </div>
    </div>
  );
};
