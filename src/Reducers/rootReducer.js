import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { collectionReducer } from "./collectionReducer";
import { directoryReducer } from "./directoryReducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  collection: collectionReducer,
  sections: directoryReducer,
});

export default rootReducer;
