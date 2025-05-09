// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJYWvKN58eWDHCzUmIsBiLkOJX8n-iWcc",
  authDomain: "shop0509-a0317.firebaseapp.com",
  databaseURL: "https://shop0509-a0317-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shop0509-a0317",
  storageBucket: "shop0509-a0317.firebasestorage.app",
  messagingSenderId: "509553877309",
  appId: "1:509553877309:web:830bfd8e699db1acbea554",
  measurementId: "G-9DWGSDJET6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


