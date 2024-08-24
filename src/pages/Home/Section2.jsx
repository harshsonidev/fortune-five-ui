import React from "react";
import SportsCardImage from "../../assets/images/sports-card.png";
import CardWithContent from "../../components/Card/CardWithContent";
import CasinoCardImage from "../../assets/images/casino-card.png";

const Section2 = () => {
  return (
    <div className="section-2">
      <CardWithContent
        image={CasinoCardImage}
        imageTitle={"Casino"}
        imageSubTitle={"and Casino Games"}
        imageButtonTitle={"Go to Casino"}
        showRightArrow={true}
        title="Leading Online Casino"
        content="Discover our wide range of casino games and enjoy an exciting and fair online gambling experience. Whether you prefer to spin slots, test your skills at live casino games or play the classics like blackjack and roulette, we have it all for you."
      />
      <CardWithContent
        image={SportsCardImage}
        imageTitle={"Sports"}
        imageButtonTitle={"Go to Sportsbook"}
        showRightArrow={true}
        title="Best Sports Betting Online"
        content="Place bets on your favourite teams, players, and leagues from across the globe. With an extensive range of betting options and markets available for live sports, including MMA, basketball, soccer, and many others, you'll have an exceptional sports betting experience."
      />
    </div>
  );
};

export default Section2;
