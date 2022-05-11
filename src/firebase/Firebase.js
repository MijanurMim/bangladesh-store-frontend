// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJeyxlzBIN58x6IXGzGn3Ffd2i8vywZD0",
  authDomain: "narshindistore.firebaseapp.com",
  projectId: "narshindistore",
  storageBucket: "narshindistore.appspot.com",
  messagingSenderId: "950311001239",
  appId: "1:950311001239:web:7d1abccb3f5c49a0b1ddd2",
};

//Auth Providers
export const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
