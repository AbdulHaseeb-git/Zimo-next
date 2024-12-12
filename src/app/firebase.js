// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF531C0GzvJK5Y5FOGFcZ9UT2ZzprIsuw",
  authDomain: "zimo-abdul-haseeb.firebaseapp.com",
  projectId: "zimo-abdul-haseeb",
  storageBucket: "zimo-abdul-haseeb.firebasestorage.app",
  messagingSenderId: "870103942809",
  appId: "1:870103942809:web:2cffa6b4a9cffa0dcf5a08",
  measurementId: "G-PQW21KW5Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);