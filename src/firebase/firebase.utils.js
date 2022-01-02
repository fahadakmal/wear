// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9
const config = {
  apiKey: "AIzaSyCfyUBUW2GCGttogkiqHj5Lj_A5A3de29k",
  authDomain: "crwn-db-221cb.firebaseapp.com",
  projectId: "crwn-db-221cb",
  storageBucket: "crwn-db-221cb.appspot.com",
  messagingSenderId: "14793078040",
  appId: "1:14793078040:web:55c1206510c4032a065a6d",
};
const firebaseApp = firebase.initializeApp(config);
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
