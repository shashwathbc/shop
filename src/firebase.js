// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjvkIfMKLYjAH_5ym2-4XPtkQCBd2nevk",
  authDomain: "order-5cc34.firebaseapp.com",
  projectId: "order-5cc34",
  storageBucket: "order-5cc34.appspot.com",
  messagingSenderId: "398330074680",
  appId: "1:398330074680:web:e2889912f0fac6d177b8cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);