import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Search,
} from "@material-ui/icons";
import { Users } from "../data/dummyData";
import { Avatar } from "./Avatar";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="topSiderbar">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Search className="sidebarIcon" />
              <input className="sidebarSearch" placeholder="Search..."/>
            </li>
            <li className="sidebarListItem item-active">
              <RssFeed className="sidebarIcon " />
              <span className="sidebarListItemText">Blog</span>
            </li>
            {/* <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li> */}
            {/* <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li> */}
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            {/* <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li> */}
            {/* <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li> */}
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
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
