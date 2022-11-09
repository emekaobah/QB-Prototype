// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFA7crXp9QArSyPd1DmsdFZ1F9NC2Yjtk",
  authDomain: "loan-app-backend-api.firebaseapp.com",
  projectId: "loan-app-backend-api",
  storageBucket: "loan-app-backend-api.appspot.com",
  messagingSenderId: "3298612224",
  appId: "1:3298612224:web:3bf0c57f93a3b7c1f9b4e5",
  measurementId: "G-2771EY54R3",
  // databaseURL: "https://loan-app-backend-api-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
