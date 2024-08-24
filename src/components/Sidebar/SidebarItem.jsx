import React, { useState } from "react";
import ArrowLeftIcon from "../../assets/svg/arrowleft.svg";
import ArrowDownIcon from "../../assets/svg/arrowdown.svg";

const SidebarItem = ({ menu }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div
        className={`sidebar__menu-item ${!isCollapsed ? "is-opened" : ""}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="sidebar__menu-item-left">
          <div className="sidebar__menu-item-left-item-icon">
            <img src={menu.icon} alt="" />
          </div>
          <div className="sidebar__menu-left-item-label">{menu.label}</div>
          {menu.isDropdown && (
            <div className="sidebar__menu-item-right">
              <div className="sidebar__menu-item-right-item-arrowleft">
                <img src={ArrowDownIcon} alt="" />
              </div>
            </div>
          )}
        </div>
        {!menu.isDropdown && menu.hasLeftArrow && (
          <div className="sidebar__menu-item-right">
            <div className="sidebar__menu-item-right-item-arrowleft">
              <img src={isCollapsed ? ArrowLeftIcon : ArrowDownIcon} alt="" />
            </div>
          </div>
        )}
      </div>
      {!isCollapsed && <div className="sidebar__menu-item-data">Data</div>}
    </>
  );
};

export default SidebarItem;
