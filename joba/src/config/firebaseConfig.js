import firebase from "firebase";
import 'firebase/firestore';
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcbNTN3QobpHJyZzeKlio9uZoG7fYAAQ8",
  authDomain: "joba-da417.firebaseapp.com",
  projectId: "joba-da417",
  storageBucket: "joba-da417.appspot.com",
  messagingSenderId: "546664797820",
  appId: "1:546664797820:web:fa54d0062de000d72adbf9",
  measurementId: "G-H0S4ZVSLCF"

});

var db = firebaseApp.firestore();

export { db };