// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase"
import config from "./config"
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: config.REACT_APP_FIREBASE_KEY,
  authDomain: "native-uber-eats-clone-cp.firebaseapp.com",
  projectId: "native-uber-eats-clone-cp",
  storageBucket: "native-uber-eats-clone-cp.appspot.com",
  messagingSenderId: "895566411159",
  appId: "1:895566411159:web:6be6e74fa2088bf364c0d2"
};



// Initialize Firebase
!firebase.apps.length? firebase.initializeApp(firebaseConfig) :firbase.app()
export default firebase;