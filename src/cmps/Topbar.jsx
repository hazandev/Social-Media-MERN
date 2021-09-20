import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { utilService } from "../services/generalService/utilService";
import { MenuIcon } from "@material-ui/icons";
export const Topbar = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const [smallScreen, setSmallScreen] = useState(true);
  useEffect(() => {
    const sizeScreen = utilService.getWindowDimensions();
  }, []);
  return (
    <div className="topbar">
      <div className="topbar-left">
        <NavLink className="logo" to="/home/feed">
          
          <img
            src="img/undraw_educator_oxfm.svg"
            alt=""
            className="topbarLogoSvg"
          />
          <p className="logoContent">
            Dev<span>N</span>et
          </p>
        </NavLink>
      </div>
      {loggedInUser && (
        <div className="topbar-right">
          <NavLink className="topbar-icons" to={`/home/${loggedInUser.id}`}>
            {loggedInUser && (
              <div className="topbar-icon">
                <img src={loggedInUser.profilePicture} alt="" />
                <span className="topbar-badge">3</span>
              </div>
            )}
          </NavLink>
        </div>
      )}
    </div>
  );
};
