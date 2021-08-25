import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rightbar } from "./Rightbar";
import { Feed } from "./Feed";

// import { Link } from "react-router-dom"

export const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmounted home");
    };
  }, []);

  return (
    <div className="home home-container">
      <Feed />
    </div>
  );
};
