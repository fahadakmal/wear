import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.action";

import SHopActionTypes from "./shop.types";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { firestore } from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    SHopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
