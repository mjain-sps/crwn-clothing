import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionItem from "../Components/CollectionItem";

function CollectionPage({ match }) {
  const collectionFromState = useSelector((state) => state.collection);
  const { collection } = collectionFromState;
  const [collectionItem, setCollectionItem] = useState([]);

  useEffect(() => {
    if (collection) {
      const items = collection.find(
        (data) => data.title === match.params.category
      );
      if (items) {
        setCollectionItem([items]);
      }
    }
  }, [collection]);

  return (
    <div>
      {collectionItem && collectionItem.length ? (
        <div>
          <div>
            <h1>{collectionItem[0].title}</h1>
          </div>

          <CollectionItem items={collectionItem[0].items} />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default withRouter(CollectionPage);
