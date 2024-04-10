import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <h1>Welcome to Plan N' Plant!</h1>
      <div className="home-button">
        <Link to="/"> ⌂ Home </Link>
      </div>
    </div>
  );
}

export default Banner;