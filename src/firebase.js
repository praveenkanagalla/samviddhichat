import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARyh54cT2lXs-ATSwjmdH6vLvDtEow2Z0",
  authDomain: "samviddhichat.firebaseapp.com",
  projectId: "samviddhichat",
  storageBucket: "samviddhichat.appspot.com",
  messagingSenderId: "805941498732",
  appId: "1:805941498732:web:e7a2d10e4368e52a809949",
  measurementId: "G-FRSL9J7FBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()