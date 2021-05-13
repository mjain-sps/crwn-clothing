import { takeLatest, call, put } from "redux-saga/effects";
import COLLECTION_TYPES from "../Action.Types/Collection.Types";
import { firestore } from "../Firebase/firebase.utils";
import {
  collectionDataSuccess,
  collectionDataError,
} from "../Actions/Collection.Action";

async function getCollection() {
  try {
    const collectionRef = firestore.collection("collection");
    const snapShot = await collectionRef.get();
    const docs = snapShot.docs.map((element) => ({
      id: element.id,
      val: element.data(),
    }));
    console.log(docs, snapShot);
    return docs;
  } catch (error) {
    console.log(error);
  }
}

function* fetchCollection() {
  try {
    const collection = yield call(getCollection);
    yield put(collectionDataSuccess(collection));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(collectionDataError(errorMessage));
  }
}

function* collectionSaga() {
  yield takeLatest(COLLECTION_TYPES.COLLECTION_DATA_LOADING, fetchCollection);
}
export default collectionSaga;
