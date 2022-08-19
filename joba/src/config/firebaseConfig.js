// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ejZhO_suptBbetyVpcLkXEtyP2Jwq9o",
  authDomain: "joba-waitlist.firebaseapp.com",
  projectId: "joba-waitlist",
  storageBucket: "joba-waitlist.appspot.com",
  messagingSenderId: "517675731736",
  appId: "1:517675731736:web:724ea5188acfad7ef56c6d",
  measurementId: "G-VVPLGVD3ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);