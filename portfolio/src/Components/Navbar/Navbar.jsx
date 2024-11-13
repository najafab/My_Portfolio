import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Najaf</h1>
      <div className="navoptions">
        <ul>
          <li>
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            {" "}
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li>
            {" "}
            <Link to={"/projects"}>Projects</Link>
          </li>
        </ul>
        <button className="nav-btn">
          <Link to={"/contact"}>Contact</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
