import React from "react";
import "./Nav.css";
import { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix"
        />
        <img
          className="nav__avatar"
          src="https://preview.redd.it/me-what-happened-to-netflix-face-icon-wasnt-the-smile-v0-ty54wbejild91.jpg?auto=webp&s=60f30f84482606de64d9630154c9c0a3f32aca05"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
