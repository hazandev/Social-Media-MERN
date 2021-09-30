import { RssFeed, HelpOutline, School, Search } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { Users } from "../data/dummyData";
import { Avatar } from "./Avatar";
import { NavLink } from "react-router-dom";
import { editSearch } from "../store/actions/uiActions";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.uiModule.searchText);
  const handleChangeSearch = (ev) => {
    const searchText = ev.target.value;
    dispatch({ type: 'EDIT_SEARCH', searchText })
  };
  const stateHamburger = useSelector((state) => state.uiModule.toggleMenuPhone);
  const classContainer = stateHamburger ? "closeSidebar" : "";
  return (
    <div className={`sidebar ${classContainer}`}>
      <div className="sidebarWrapper">
        <div className="topSidebar">
          <nav className="sidebarList">
            <li className="sidebarListItem searchItem" to="">
              <Search className="sidebarIcon" />
              <input
                className="sidebarSearch"
                placeholder="Search..."
                value={searchText || ''}
                onChange={handleChangeSearch}
              />
            </li>
            <NavLink
              className="sidebarListItem"
              activeClassName="item-active"
              to="/home/feed"
            >
              <RssFeed className="sidebarIcon " />
              <span className="sidebarListItemText">Feed</span>
            </NavLink>
            <NavLink
              className="sidebarListItem"
              activeClassName="item-active"
              to="/home/blog"
            >
              <LibraryBooksIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Blog</span>
            </NavLink>
            <NavLink
              className="sidebarListItem"
              activeClassName="item-active"
              to="/home/course"
            >
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </NavLink>
          </nav>
          <div className="listFriendWrapper">
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
              {Users.map((user) => (
                <Avatar key={user._id} user={user} />
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
