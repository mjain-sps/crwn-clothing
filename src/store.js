import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";
import rootSaga from "./Sagas/rootSaga";
//setting up saga
import createSagaMiddleWare from "redux-saga";

const sagaMiddleWare = createSagaMiddleWare();

const middleWare = [sagaMiddleWare];

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { toggleDropdown: false, cartItems: [] };

const initialState = {
  cart: cartFromStorage,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(rootSaga);
export default store;
