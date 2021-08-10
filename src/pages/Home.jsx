import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="home">
      <p>Hello World</p>
    </div>
  );
};
