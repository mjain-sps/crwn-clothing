import COLLECTION_TYPES from "../Action.Types/Collection.Types";
import { reducedCollection } from "./Utils/collection.utils";
const inititalState = {
  loading: false,
  collection: [],
  error: null,
};

export const collectionReducer = (state = inititalState, action) => {
  switch (action.type) {
    case COLLECTION_TYPES.COLLECTION_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COLLECTION_TYPES.COLLECTION_DATA_SUCCESS:
      console.log("payload as received in reducer", action.payload);
      return {
        ...state,
        loading: false,
        collection: reducedCollection(action.payload),
        error: null,
      };
    case COLLECTION_TYPES.COLLECTION_DATA_ERROR:
      return {
        ...state,
        loading: false,
        collection: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
