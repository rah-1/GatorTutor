// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Pg_d7uvEpfiBey99TpCgzNExjcf8g7c",
  authDomain: "gatortutor-28eed.firebaseapp.com",
  projectId: "gatortutor-28eed",
  storageBucket: "gatortutor-28eed.appspot.com",
  messagingSenderId: "602740690359",
  appId: "1:602740690359:web:94c4e89962f2a2df422c32",
  measurementId: "G-9PN0V89V7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);