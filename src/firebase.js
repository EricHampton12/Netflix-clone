import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkO_lCpGfUH-ut99zAL13Fg-NMzexBHW4",
  authDomain: "netflix-v2-212e9.firebaseapp.com",
  projectId: "netflix-v2-212e9",
  storageBucket: "netflix-v2-212e9.appspot.com",
  messagingSenderId: "689884671816",
  appId: "1:689884671816:web:21cd464a52c895e2c9cd7d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
