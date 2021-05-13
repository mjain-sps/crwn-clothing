import React, { useEffect } from "react";
import CollectionItem from "./CollectionItem";
import "../CSS/CollectionPreview/collection-preview.scss";
import { withRouter } from "react-router-dom";
//import redux-react hooks
import { useSelector } from "react-redux";

function CollectionPreview({ match, history, location }) {
  const collectionFromState = useSelector((state) => state.collection);
  const { collection } = collectionFromState;

  useEffect(() => {
    if (location.search) {
      const domElementObject = document.querySelectorAll(".item-title");
      const domElementArray = Array.from(domElementObject);
      const category = location.search.split("=")[1];
      const found = domElementArray.find(
        (element) => element.innerHTML === category
      );
      if (found) {
        const domCoords = found.getBoundingClientRect();
        window.scrollTo({
          left: domCoords.left + window.pageXOffset,
          top: domCoords.top + window.pageYOffset,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <div className="collection-preview-wrapper">
      {collection &&
        collection.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <h1
                  onClick={() => history.push(`${match.path}/${item.title}`)}
                  className="item-title"
                >
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
