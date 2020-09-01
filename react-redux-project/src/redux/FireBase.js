//Firebase
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD1L9Pqeyi39XlAd_ylKM3Oq_JImpFdBy0",
  authDomain: "truong-7c6ce.firebaseapp.com",
  databaseURL: "https://truong-7c6ce.firebaseio.com",
  projectId: "truong-7c6ce",
  storageBucket: "truong-7c6ce.appspot.com",
  messagingSenderId: "217473377658",
  appId: "1:217473377658:web:06b51bb1f3bd820d1ca2c3",
  measurementId: "G-NR4VTSGXTC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataFirebase = firebase.database().ref("data");
export default dataFirebase;