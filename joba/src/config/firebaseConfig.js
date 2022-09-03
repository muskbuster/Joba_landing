import firebase from "firebase";
import 'firebase/firestore';
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0ejZhO_suptBbetyVpcLkXEtyP2Jwq9o",
  authDomain: "joba-waitlist.firebaseapp.com",
  projectId: "joba-waitlist",
  storageBucket: "joba-waitlist.appspot.com",
  messagingSenderId: "517675731736",
  appId: "1:517675731736:web:724ea5188acfad7ef56c6d",

});

var db = firebaseApp.firestore();

export { db };