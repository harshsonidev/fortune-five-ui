import React from "react";
import Logo from "../../assets/images/logo2.png";

const Section5 = () => {
  return (
    <div className="section-5">
      <div className="title-block">
        <img className="logo" src={Logo} alt="" />
        <span className="title">
          — Online Casino and Sports Betting Platform
        </span>
      </div>
      <div className="content-block">
        <div className="content-right">
          Fortune Five is a worldwide leader in online gambling with one of the
          best casino and sports betting platforms. Here at Fortune Five we take
          online gambling seriously, we always strive to offer good gaming
          products and a vast selection that range from Sports, Live Casino, and
          many more to all online gambling fans. No matter how particular you
          are, we have found a way to fulfil your choice of betting. Powered by
          excellent quality and multiple software platforms we have brought
          together a never done before casino experience, all this is courtesy
          of Fortune Five. We offer all of our games on PC, Tablet and Mobile
          Platforms.
        </div>
        <ul className="content-left m-0">
          <li className="item">
            <span className="item-title">ApeCoin (APE): </span> Released in
            2022, ApeCoin is the native currency of the Bored Ape Yacht CLub
            (BAYT) and was another exciting release part of the August 2022
            cryptocurrency expansion on Stake.
          </li>
          <li className="item">
            <span className="item-title">Binance USD (BUSD): </span>
            Pegged to the US Dollar, this stablecoin is issued by the
            cryptocurrency exchange Binance and has grown in popularity since
            2019. Like many others, this was also released as a supported
            cryptocurrency to gamble with on Stake in August 2022.
          </li>
        </ul>
      </div>
      <div className="bottom-overlay">
        <button className="button">Show More</button>
      </div>
    </div>
  );
};

export default Section5;
