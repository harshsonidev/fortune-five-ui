import React from "react";
import RightArrowIcon from "../../assets/svg/right-sign-arrow.svg";

const CardWithContent = ({
  image,
  title,
  content,
  imageTitle,
  imageSubTitle,
  imageButtonTitle,
  showRightArrow = false,
}) => {
  return (
    <div className="card-with-content">
      <div className="image-block">
        <div className="content-block">
          <div className="title-block">
            <div className="title">{imageTitle}</div>
            <div className="sub-title">{imageSubTitle}</div>
          </div>
          <div className="button-title">
            <span className="button-text">{imageButtonTitle}</span>
            <span className="button-text">
              {showRightArrow && (
                <img src={RightArrowIcon} alt="" className="right-arrow-icon" />
              )}
            </span>
          </div>
        </div>
        <img className="image" src={image} alt="" />
      </div>
      <div className="content">
        <h6 className="content-title">{title}</h6>
        <p className="content-para">{content}</p>
      </div>
    </div>
  );
};

export default CardWithContent;
