import React from "react";
import Logo from "../../assets/images/logo2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links-block">
        <div className="links">
          <div className="link-title">Info</div>
          <div className="link">About Us</div>
          <div className="link">Promotions</div>
          <div className="link">Payments</div>
          <div className="link">Responsible gaming</div>
        </div>
        <div className="links">
          <div className="link-title">Support</div>
          <div className="link">FAQ</div>
          <div className="link">Contact Us</div>
          <div className="link">Sport Betting Rules</div>
          <div className="link">Protection of Players</div>
        </div>
        <div className="links">
          <div className="link-title">Regulations</div>
          <div className="link">Terms & Conditions</div>
          <div className="link">Privacy Policy</div>
          <div className="link">KYC policy</div>
          <div className="link">AML policy</div>
        </div>
      </div>
      <div className="logo-block">
        <img className="logo" src={Logo} alt=""></img>
        <span className="copyright">
          © 2023 Fortune Five <br />
          All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
