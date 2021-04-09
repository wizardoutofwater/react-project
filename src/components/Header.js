import React from "react";
import "../App.css";

const Header = () => {
  const _handleBurger = () => {
    const navBurger = document.getElementById("navBurger");
    const navbarMenu = document.getElementById("navbarMenu");

    navBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  };

  return (
    <div>
      <nav className="navbar ">
        <div className="navbar-brand">
        <a class="navbar-item" href="#">
      <img src="./photo-camera.svg" width="125" height="125"></img>
    </a>
          <div
            className="navbar-burger burger"
            id="navBurger"
            data-target="navbarMenu"
            onClick={_handleBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">
              <span className="icon">
                <i className="fas fa-info"></i>
              </span>
              <span>the Math</span>
            </a>
            <a className="navbar-item" href="#services">
              <span className="icon">
                <i className="fas fa-bars"></i>
              </span>
              <span>EV Scale</span>
            </a>
            <a className="navbar-item" href="#resume">
              <span className="icon">
                <i className="fas fa-file-alt"></i>
              </span>
              <span>gitHub</span>
            </a>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
