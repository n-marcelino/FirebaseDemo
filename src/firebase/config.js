import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmGOSaorZkHMbzp8ld3xZCT7qhJyuLpYo",
  authDomain: "reactdemo2024.firebaseapp.com",
  projectId: "reactdemo2024",
  storageBucket: "reactdemo2024.appspot.com",
  messagingSenderId: "507028973259",
  appId: "1:507028973259:web:d96161a8975149d181dd4e",
  measurementId: "G-SLH99G44SL"


};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth }