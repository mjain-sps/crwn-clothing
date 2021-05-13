import { COLLECTION_TYPES } from "../Action.Types/Collection.Types";
const inititalState = {
  loading: false,
  collection: [],
  error: null,
};

export const collectionReducer = (state = inititalState, action) => {
  switch (action.types) {
    case COLLECTION_TYPES.COLLECTION_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COLLECTION_TYPES.COLLECTION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        collection: action.payload,
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
