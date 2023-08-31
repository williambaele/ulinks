/////
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2cR6kwM-YYuY5cEn3Tc4Wi76lQcVB0N4",
  authDomain: "ulinks-4c92f.firebaseapp.com",
  projectId: "ulinks-4c92f",
  storageBucket: "ulinks-4c92f.appspot.com",
  messagingSenderId: "454779223582",
  appId: "1:454779223582:web:9c7277f5a8086da233780f",
  measurementId: "G-L82W2XX80J"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
