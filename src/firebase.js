import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUMQYm9MMESDaYcpI24V-mS6mbqklufqU",
  authDomain: "tweet-22.firebaseapp.com",
  projectId: "tweet-22",
  storageBucket: "tweet-22.appspot.com",
  messagingSenderId: "130358896512",
  appId: "1:130358896512:web:115ad0da8d1467c40a4365",
  measurementId: "G-EZVWD309GF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
