// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzXPd4H6DCrEcAxgYUkoeb0S34q26BhxM",
  authDomain: "coffee-store-app-70fae.firebaseapp.com",
  projectId: "coffee-store-app-70fae",
  storageBucket: "coffee-store-app-70fae.firebasestorage.app",
  messagingSenderId: "509952706374",
  appId: "1:509952706374:web:160ad1ba30754b8c230747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);