import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { utilService } from "../services/generalService/utilService";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { userService } from "../services/userService";
export const Topbar = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const [smallScreen, setSmallScreen] = useState(true);
  useEffect(() => {
    const sizeScreen = utilService.getWindowDimensions();
  }, []);
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
    </div>
  );
};
