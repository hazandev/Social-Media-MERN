import {
  RssFeed,
  HelpOutline,
  School,
  Search,
} from "@material-ui/icons";
import { Users } from "../data/dummyData";
import { Avatar } from "./Avatar";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="topSiderbar">
          <nav className="sidebarList">
            <li className="sidebarListItem" to="">
              <Search className="sidebarIcon" />
              <input className="sidebarSearch" placeholder="Search..."/>
            </li>
            <NavLink className="sidebarListItem" activeClassName="item-active" to="/home/feed">
              <RssFeed className="sidebarIcon " />
              <span className="sidebarListItemText">Blog</span>
            </NavLink>
            <NavLink className="sidebarListItem" activeClassName="item-active" to="/home/question">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </NavLink>
            <NavLink className="sidebarListItem" activeClassName="item-active" to="/home/course">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </NavLink>
          </nav>
          <div className="listFriendWrapper">
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
              {Users.map((user) => (
                <Avatar key={user.id} user={user} />
              ))}
            </ul>
          </div>
        </div>
        <p className="creator">
          Hazan-<span>dev</span>
        </p>
      </div>
    </div>
  );
};
