import COLLECTION_TYPES from "../Action.Types/Collection.Types";

export const collectionDataLoading = () => {
  return {
    type: COLLECTION_TYPES.COLLECTION_DATA_LOADING,
  };
};

export const collectionDataSuccess = (collection) => {
  return {
    type: COLLECTION_TYPES.COLLECTION_DATA_SUCCESS,
    payload: collection,
  };
};

export const collectionDataError = (error) => {
  return {
    type: COLLECTION_TYPES.COLLECTION_DATA_ERROR,
    payload: error,
  };
};
