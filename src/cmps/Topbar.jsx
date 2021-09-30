import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { utilService } from "../services/generalService/utilService";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { userService } from "../services/userService";
import MenuIcon from "@mui/icons-material/Menu";

export const Topbar = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);

  const dispatch = useDispatch();

  const stateHamburger = useSelector((state) => state.uiModule.toggleMenuPhone);


  const toggleHamburger = () => {
    dispatch({ type: 'TOGGLE_MENU_PHONE', stateHamburger })
    console.log(stateHamburger);
  };

  const doLogout = () => {
    console.log("logout");
  };
  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link className="logo" to="/home/feed">
          <img
            src="img/undraw_educator_oxfm.svg"
            alt=""
            className="topbarLogoSvg"
          />
          <p className="logoContent">
            Dev<span>N</span>et
          </p>
        </Link>
      </div>
      {loggedInUser && (
        <div className="topbar-right">
          <Link
            className="logout d-none"
            onClick={() => {
              doLogout();
            }}
            to={"/"}
          >
            <LogoutOutlinedIcon />
            <p>Logout</p>
          </Link>
          {loggedInUser && (
            <Link className="topbar-icons" to={`/home/${loggedInUser._id}`}>
              <img src={loggedInUser.profilePicture} alt="" />
            </Link>
          )}
        </div>
      )}
      <div className="topbar-right hamburgerMenu" onClick={() => {
        toggleHamburger();
      }}>
        <MenuIcon />
      </div>
    </div>
  );
};
