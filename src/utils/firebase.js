// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKKU92KtvqlZtaQ_Uqa82fXtfH61zI58I",
  authDomain: "netflixgpt-976d0.firebaseapp.com",
  projectId: "netflixgpt-976d0",
  storageBucket: "netflixgpt-976d0.firebasestorage.app",
  messagingSenderId: "723010006712",
  appId: "1:723010006712:web:ed1876f9a8678f891d4e4d",
  measurementId: "G-EH26CM2B34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
