// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nuts-lab.firebaseapp.com",
  databaseURL:
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nuts-lab",
  storageBucket: "nuts-lab.appspot.com",
  messagingSenderId: "4704808249",
  appId: "1:4704808249:web:55f105537c951e31b0cce8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getDatabase(app);
export const { databaseURL } = firebaseConfig;
