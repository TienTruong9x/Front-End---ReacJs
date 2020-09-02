import * as firebase from "firebase";
// Your web app's Firebase configuration
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
const fireBase = firebase.initializeApp(firebaseConfig);
export default fireBase;

var data = firebase.database().ref("data/");
data.once("value").then((snapshot) => {
  console.log(snapshot.val());
});
