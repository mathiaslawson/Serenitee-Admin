// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNJ-i7Y47VJM8MHmSEDj3hAuwOQvVoO1k",
  authDomain: "mentalhealthapp-4343c.firebaseapp.com",
  projectId: "mentalhealthapp-4343c",
  storageBucket: "mentalhealthapp-4343c.appspot.com",
  messagingSenderId: "468100879767",
  appId: "1:468100879767:web:60289f9e9aa691d7a0a0d2",
  measurementId: "G-19408KB6K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()