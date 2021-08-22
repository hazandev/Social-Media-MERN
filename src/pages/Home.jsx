import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../cmps/Sidebar";
import { Rightbar } from "../cmps/Rightbar";
import { Feed } from "../cmps/Feed";

// import { Link } from "react-router-dom"

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmounted home");
    };
  }, []);

  return (
    <div className="home home-container">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
};
