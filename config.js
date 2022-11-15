import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMKzuw7tIkrz3YkshfsjY9GmiLdwgaNi4",
  authDomain: "idopontom-72426.firebaseapp.com",
  projectId: "idopontom-72426",
  storageBucket: "idopontom-72426.appspot.com",
  messagingSenderId: "718795439527",
  appId: "1:718795439527:web:60d7a5b58a85d006630a82",
  measurementId: "G-MSBH0GR6HJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
