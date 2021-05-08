import React from "react";
import ShopData from "../Data/shop.data.js";
import CollectionItem from "./CollectionItem";
class CollectionPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: ShopData,
    };
  }
  render() {
    const { collection } = this.state;
    console.log(collection);
    return (
      <div className="collection-preview-wrapper">
        {collection.map((item) => {
          return;
          <CollectionItem key={item.key} item={item} />;
        })}
      </div>
    );
  }
}
export default CollectionPreview;
