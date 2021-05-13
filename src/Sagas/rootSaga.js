import { all } from "redux-saga/effects";
import collectionSaga from "./CollectionSaga";

function* rootSaga() {
  yield all([collectionSaga()]);
}

export default rootSaga;
