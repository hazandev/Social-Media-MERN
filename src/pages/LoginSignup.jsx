import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../cmps/login/LoginForm";
import { SignupForm } from "../cmps/login/SignupForm";

export const LoginSignup = () => {
  let history = useHistory();
  const toggleLogin = useSelector((state) => state.uiModule.toggleLogin);
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    console.log(toggleLogin);

    console.log("mount login");
    if (loggedInUser) {
      history.push("/home");
    }
  }, []);

  // useEffect(() => {
  //   console.log(toggleLogin);
  // }, [toggleLogin])

  return (
    <div className="loginSignup">
      <div className="logo">
        <img src="img/undraw_educator_oxfm.svg" alt="" className="logoSvg" />
        Dev<span>N</span>et
        <p className="lead">{`Web Developer   Community`} </p>
      </div>
      <div className="loginSignupWrapper">
        <div className="leftLogin"></div>
        <div className="rightLogin">
          <div className="loginSignupForm">
            {toggleLogin ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
