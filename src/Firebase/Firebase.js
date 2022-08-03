import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// sign in with google popup
const googleProvider = new GoogleAuthProvider();
// use async await next
const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const profilePic = result.user.photoURL;
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => alert("Email Not found"));
};
// log in with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// register with email and password
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// password reset optional
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
