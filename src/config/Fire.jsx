import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage"
var firebaseConfig = {
  apiKey: "AIzaSyCjtvOEFMWdKwZtRnBUKA2wV2094SO2Juo",
  authDomain: "fir-intro-b8cf0.firebaseapp.com",
  databaseURL: "https://fir-intro-b8cf0.firebaseio.com",
  projectId: "fir-intro-b8cf0",
  storageBucket: "fir-intro-b8cf0.appspot.com",
  messagingSenderId: "920323676720",
  appId: "1:920323676720:web:377b4ebb4c5ce277ffabf5"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const storage=firebase.storage();
export {storage};
export default firebase ;