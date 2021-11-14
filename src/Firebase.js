import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = ({
  apiKey: "AIzaSyApCXLf__wvHSYRKqJ9oY_8sGF7l6V0MRE",
  authDomain: "react-coderhouse-andressarmien.firebaseapp.com",
  projectId: "react-coderhouse-andressarmien",
  storageBucket: "react-coderhouse-andressarmien.appspot.com",
  messagingSenderId: "716759012343",
  appId: "1:716759012343:web:a2e094ddd12d12c06b14f2",
  measurementId: "G-0CEMW2BLJM"
});

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
