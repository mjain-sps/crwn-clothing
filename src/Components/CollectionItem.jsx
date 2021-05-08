import React from "react";

function CollectionItem({ item }) {
  console.log(item);
  return (
    <div className="collection-item-wrapper">
      <div>{item.title}</div>
      {item.items
        .filter((item, idx) => idx < 4)
        .map((item) => {
          return (
            <div className="collection-item-overlay">
              <div className="collection-item-main-container">
                <div className="collection-item-content">
                  <button>ADD TO CART</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CollectionItem;
