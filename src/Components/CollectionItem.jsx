import React from "react";
import "../CSS/CollectionPreview/collection-item.scss";

function CollectionItem({ items }) {
  console.log(items);
  return (
    <div className="collection-item-wrapper">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => {
          return (
            <>
              <div className="collection-item-container">
                <div className="collection-item-header">
                  <div className="collection-item-overlay">
                    <div
                      className="collection-item-main-container"
                      style={{
                        background: `url(${item.imageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="collection-item-content">
                        <button>ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-item-footer">
                  <span>{item.name}</span>
                  <span>$ &nbsp;{item.price}</span>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default CollectionItem;
