// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyC3yvJGoubwjxI300HVHvJeYEGr6V4_M8o",
  authDomain: "bzcareer.firebaseapp.com",
  projectId: "bzcareer",
  storageBucket: "bzcareer.appspot.com",
  messagingSenderId: "175229780667",
  appId: "1:175229780667:web:a95d5a08538b36d19c5f9e",
});

// Initialize Firebase
export const auth = getAuth(app);

export default app;
