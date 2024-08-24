import React from "react";
import CrownIcon from "../../assets/svg/crown.svg";
import SportIcon from "../../assets/svg/sports.svg";
import FavoriteIcon from "../../assets/svg/favorite.svg";
import PromotionIcon from "../../assets/svg/promotion.svg";
import AffilatesIcon from "../../assets/svg/affilates.svg";
import LiveSupportIcon from "../../assets/svg/live-support.svg";
import USAFlagIcon from "../../assets/svg/usa-flag.svg";
import SidebarItem from "./SidebarItem";

const menus = [
  {
    icon: CrownIcon,
    label: "Casino",
    hasLeftArrow: true,
  },
  {
    icon: SportIcon,
    label: "Sports",
    hasLeftArrow: true,
  },
  {
    icon: FavoriteIcon,
    label: "Favorites",
  },
  {
    icon: PromotionIcon,
    label: "Promotions",
  },
  {
    icon: AffilatesIcon,
    label: "Affilates",
  },
  {
    icon: LiveSupportIcon,
    label: "Live Support",
  },
  {
    icon: USAFlagIcon,
    label: "English",
    isDropdown: true,
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        {menus.map((menu, index) => (
          <SidebarItem key={index} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
