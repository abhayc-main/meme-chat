import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/messaging";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyB93PJAuUm4XFUDA3w9MSJAP9vlmpzqd3Y",
  authDomain: "the-zephyr.firebaseapp.com",
  projectId: "the-zephyr",
  storageBucket: "the-zephyr.appspot.com",
  messagingSenderId: "643188587747",
  appId: "1:643188587747:web:00c9d7badb5a29b7ec19d6"
};
const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();


const db  = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db,auth,provider  };