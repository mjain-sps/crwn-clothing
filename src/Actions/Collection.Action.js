import { COLLECTION_TYPES } from "../Action.Types/Collection.Types";

export const collectionDataLoading = () => (dispatch) => {
  dispatch({ type: COLLECTION_TYPES.COLLECTION_DATA_LOADING });
};
