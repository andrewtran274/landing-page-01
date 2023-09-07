import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Lanuch Your App</span> With Confidence And Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          doloribus!
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default Header;
