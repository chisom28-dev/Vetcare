// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw7UV3M3hto7GGVx0NAkdmaWfb3vA-Z7g",
  authDomain: "vetcare-30e63.firebaseapp.com",
  projectId: "vetcare-30e63",
  storageBucket: "vetcare-30e63.firebasestorage.app",
  messagingSenderId: "97102451530",
  appId: "1:97102451530:web:974fe2b9e98e241501e7b3",
  measurementId: "G-S4WYVKKGN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);