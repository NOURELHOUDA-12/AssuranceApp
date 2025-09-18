

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj1Wzn9-X0lr4DeSc-_lWE6qelZnfrXwM",
  authDomain: "assuranceapp-7adb4.firebaseapp.com",
  projectId: "assuranceapp-7adb4",
  storageBucket: "assuranceapp-7adb4.firebasestorage.app",
  messagingSenderId: "64821884161",
  appId: "1:64821884161:web:c4eb80f6e06f708b545700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
