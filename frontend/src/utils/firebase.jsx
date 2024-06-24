// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const apiKey = import.meta.env.VITE_FIREBASE_API



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:`${apiKey}` ,
  authDomain: "netflixgpt-5fcf1.firebaseapp.com",
  projectId: "netflixgpt-5fcf1",
  storageBucket: "netflixgpt-5fcf1.appspot.com",
  messagingSenderId: "651000467852",
  appId: "1:651000467852:web:b391d02613453f4fbdc6a9",
  measurementId: "G-4TR5F855XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
