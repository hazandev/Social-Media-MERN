import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {utilService} from '../services/generalService/utilService'
import {MenuIcon} from '@material-ui/icons';
export const Topbar = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const [smallScreen, setSmallScreen] = useState(true)
  useEffect(() => {
    const sizeScreen = utilService.getWindowDimensions();
    console.log(sizeScreen);
  }, [])
  return (
    <div className="topbar">
      <div className="topbar-left">
        <NavLink className="logo" to="/home">
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
      <div className="topbar-right">
        <div className="topbar-icons">
          {loggedInUser && (
            <div className="topbar-icon">
              <img src={loggedInUser.profilePicture} alt="" />
              <span className="topbar-badge">3</span>
            </div>
          )}
          {

          }
        </div>
      </div>
    </div>
  );
};
