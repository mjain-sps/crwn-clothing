import React from "react";
import CollectionItem from "./CollectionItem";
import "../CSS/CollectionPreview/collection-preview.scss";
import { withRouter } from "react-router-dom";
//import redux-react hooks
import { useSelector } from "react-redux";

function CollectionPreview({ match, history }) {
  const collectionFromState = useSelector((state) => state.collection);
  const { collection } = collectionFromState;

  return (
    <div className="collection-preview-wrapper">
      {collection &&
        collection.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <h1 onClick={() => history.push(`${match.path}/${item.title}`)}>
                  {item.title.toUpperCase()}
                </h1>
              </div>
              <div>
                <CollectionItem
                  key={item.key}
                  items={item.items.filter((itm, idx) => idx < 4)}
                />
              </div>
              <div>
                <span
                  onClick={() => history.push(`${match.path}/${item.title}`)}
                >
                  View More
                </span>
              </div>
              <div className="separator"></div>
            </div>
          );
        })}
    </div>
  );
}

export default withRouter(CollectionPreview);
