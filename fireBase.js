import firebase from "firebase/compat";
import "firebase/compat/auth";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyrXLhRmEIwPexbAEjLY53WXwDc2Ud_AI",
  authDomain: "idopontom.firebaseapp.com",
  databaseURL:
    "https://idopontom-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "idopontom",
  storageBucket: "idopontom.appspot.com",
  messagingSenderId: "402961395983",
  appId: "1:402961395983:web:ec242a04dd3aa16f4b8e7a",
  measurementId: "G-42N7V7ZNB2",
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

const db = app.firestore();

const auth = firebase.auth();

const fireBaseObj = app;

export { db, auth, fireBaseObj };
