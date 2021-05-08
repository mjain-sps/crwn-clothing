import React from "react";
import "../CSS/HomePage/menuitem.scss";
function MenuItem({ item }) {
  return (
    <div className="menuitem-overflow-wrapper">
      <div
        className="menuitem-wrapper"
        style={{ background: `url(${item.imageUrl})` }}
      >
        <div className="menuitem-content">
          <h2>{item.title}</h2>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
