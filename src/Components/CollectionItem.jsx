import React from "react";
import "../CSS/CollectionPreview/collection-item.scss";
import CustomButton from "./CustomButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/Cart.Actions";
function CollectionItem({ items }) {
  const dispatch = useDispatch();
  const handleAddToCart = (event, item) => {
    event.preventDefault();
    dispatch(addToCart(item));
  };
  return (
    <div className="collection-item-wrapper">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => {
          return (
            <>
              <div className="collection-item-container" key={item.id}>
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
                        <CustomButton
                          matter="ADD TO CART"
                          type="button"
                          onClick={(event) => handleAddToCart(event, item)}
                        />
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
