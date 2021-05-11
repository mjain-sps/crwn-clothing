import React from "react";
import ShopData from "../Data/shop.data.js";
import CollectionItem from "./CollectionItem";
import "../CSS/CollectionPreview/collection-preview.scss";

class CollectionPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: ShopData,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="collection-preview-wrapper">
        {collection.map((item) => {
          return (
            <>
              <div key={item.id}>
                <h1>{item.title.toUpperCase()}</h1>
              </div>
              <div>
                <CollectionItem key={item.key} items={item.items} />
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
export default CollectionPreview;
