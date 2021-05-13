import { takeLatest, put, call } from "redux-saga/effects";
import { COLLECTION_TYPES } from "../Action.Types/Collection.Types";
function apiRequest(data) {
  console.log(` I am being called ${data}`);
}

function* fetchCollection() {
  yield console.log("I am being called");
}

function* collectionSaga() {
  yield takeLatest(COLLECTION_TYPES.COLLECTION_DATA_LOADING, fetchCollection);
}
export default collectionSaga;
