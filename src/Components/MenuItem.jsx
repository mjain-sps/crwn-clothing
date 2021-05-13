import React from "react";
import "../CSS/HomePage/menuitem.scss";
import { withRouter } from "react-router-dom";
function MenuItem({ item, history }) {
  return (
    <div className="menuitem-overflow-wrapper">
      <div
        className="menuitem-wrapper"
        style={{
          background: `url(${item.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
        onClick={() =>
          history.push(`/shop/?category=${item.title.toUpperCase()}`)
        }
      >
        <div className="menuitem-content">
          <h2>{item.title}</h2>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
