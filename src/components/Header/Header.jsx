import React from "react";
import Logo from "../../assets/images/logo.png";
import SidebarControllerSvg from "../../assets/svg/sidebar-controller.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="sidebar-button">
          <div className="sidebar-button-controller">
            <img src={SidebarControllerSvg} alt="" />
          </div>
          <span className="sidebar-button-label">Menu</span>
        </div>
        <div className="logo">
          <img src={Logo} alt="Fortune Five" />
        </div>
      </div>
      <div className="header__right">
        <div className="buttons">
          <button className="button button-sign-in">Sign In</button>
          <button className="button button-register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
