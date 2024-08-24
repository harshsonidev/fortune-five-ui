import React from "react";
import Card from "../../components/Card/Card";
import Background1 from "../../assets/images/card-1-right.png";
import Background2 from "../../assets/images/card-1-left.png";
import Logo from "../../assets/images/logo.png";
import GoogleIcon from "../../assets/svg/google.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";

const Section1 = () => {
  return (
    <div className="section-1">
      <Card>
        <div className="banner">
          <img src={Background1} alt="" className="background-image-right" />
          <img src={Background2} alt="" className="background-image-left" />
          <img src={Logo} alt="" className="background-image-right-logo" />
          <div className="card__content">
            <div className="card__content-title">100% Welcome Bonus</div>
            <div className="card__content-block">
              <div>
                <button className="card__content-block-button-register">
                  Register instantly
                </button>
              </div>
              <div className="card__content-block-line-block">
                <span className="title">on continue with</span>
                <span className="line"></span>
              </div>
              <div className="card__content-block-social-buttons">
                <button className="button button-google">
                  <img src={GoogleIcon} alt="" /> Google
                </button>
                <button className="button button-facebook">
                  <img src={FacebookIcon} alt="" /> Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Section1;
