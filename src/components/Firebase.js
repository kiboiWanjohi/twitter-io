import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBkv8IgvHM-sxV5RcGaL6DVuRciFSC-_rA",
  authDomain: "twitter-io-87e50.firebaseapp.com",
  projectId: "twitter-io-87e50",
  storageBucket: "twitter-io-87e50.appspot.com",
  messagingSenderId: "771313846443",
  appId: "1:771313846443:web:fc2373d7f7255271f78fee",
  measurementId: "G-HJTPSKX6LV",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db;
