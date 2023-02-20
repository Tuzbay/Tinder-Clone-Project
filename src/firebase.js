import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSTwV6LjtZzXtjktdA4t0pM8sb9UKHfO4",
  authDomain: "tinder-clone-1aa14.firebaseapp.com",
  projectId: "tinder-clone-1aa14",
  storageBucket: "tinder-clone-1aa14.appspot.com",
  messagingSenderId: "851097682271",
  appId: "1:851097682271:web:a872c17773f8f484cc76ea",
  measurementId: "G-CC59HW0YGD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
