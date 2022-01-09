import SHopActionTypes from "./shop.types";
import { convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { firestore } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: SHopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure =(errorMessage) =>({
  type:SHopActionTypes.FETCH_COLLECTION_FAILURE,
  payload:errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message))
      });
  };
};
