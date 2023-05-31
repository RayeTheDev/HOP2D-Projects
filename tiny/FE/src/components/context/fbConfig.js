// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";import { FacebookAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2ViR4rlfdaUwB11X6qRj-gzrOMyxJprQ",
    authDomain: "boginoo-badfc.firebaseapp.com",
    projectId: "boginoo-badfc",
    storageBucket: "boginoo-badfc.appspot.com",
    messagingSenderId: "614149294989",
    appId: "1:614149294989:web:cfa1bd67d59abbfe690bc4",
    measurementId: "G-VC27ED9FCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new FacebookAuthProvider(app);
const auth =  getAuth(app)

export {provider, auth}