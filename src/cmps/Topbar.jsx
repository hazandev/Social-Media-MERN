import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

export const Topbar = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);

  return (
    <div>
      {loggedInUser && (
        <div className="topbar-container">
          <div className="topbar-left">
            <NavLink className="logo" to="/">
              V<span className="c-info">i</span>beTech
            </NavLink>
          </div>
          <div className="topbar-center">
            {/* <div className="searchbar">
            <Search />
            <input type="text" placeholder="Search for friend, post or video " />
          </div> */}
          </div>
          <div className="topbar-right">
            <div className="topbar-icons">
              <div className="topbar-icon">
                <img src="img/person/2.jpeg" alt="" />
                <span className="topbar-badge">3</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
