// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkv8IgvHM-sxV5RcGaL6DVuRciFSC-_rA",
  authDomain: "twitter-io-87e50.firebaseapp.com",
  projectId: "twitter-io-87e50",
  storageBucket: "twitter-io-87e50.appspot.com",
  messagingSenderId: "771313846443",
  appId: "1:771313846443:web:fc2373d7f7255271f78fee",
  measurementId: "G-HJTPSKX6LV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
const analytics = getAnalytics(app);
