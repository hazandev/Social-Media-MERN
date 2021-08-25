import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/actions/userActions";
import { userService } from "../../services/userService";
import { useForm } from "../../services/generalService/customHooks";

export const SignupForm = ({ setToggleLogin }) => {
  const [msg, setMsg] = useState("");
  const toggleLogin = useSelector((state) => state.toggleLogin);
  const [credSignup, handleChangeSignup, setCredSignup] = useForm(
    userService.getEmptySignup()
  );
  const dispatch = useDispatch();

  const doSignup = async () => {
    const { username, password, fullname } = credSignup;
    if (!username || !password || !fullname) {
      return setMsg("All inputs are required");
    }
    const signupCreds = { username, password, fullname };
    dispatch(signup(signupCreds));
    setCredSignup({ username: "", password: "", fullname: "" });
  };

  return (
    <div className="loginForm">
      <div className="formWrapper">
        <h2>Signup</h2>
        <form>
          <input
            type="text"
            name="fullname"
            value={credSignup.fullname}
            onChange={handleChangeSignup}
            placeholder="Full name"
            autoComplete="fullname"
          />
          <input
            type="text"
            name="username"
            value={credSignup.username}
            onChange={handleChangeSignup}
            placeholder="Username"
            autoComplete="username"
          />
          <input
            name="password"
            type="password"
            value={credSignup.password}
            onChange={handleChangeSignup}
            placeholder="Password"
            autoComplete="current-password"
          />
          <div className="loginActions flex space-between">
            <button
              className="login-btn "
              onClick={() => {
                doSignup();
              }}
            >
              Signup
            </button>
            <button
              className="login-btn login-btn-toggle"
              onClick={() => {
                dispatch({ type: "TOGGLE_LOGIN" });
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <p>{msg}</p>
    </div>
  );
};
