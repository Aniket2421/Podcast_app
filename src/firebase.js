// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import{getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLuzAmGAvFTuJzk1IcL2nXcNeFcOqtgVI",
  authDomain: "podcast-app-78349.firebaseapp.com",
  projectId: "podcast-app-78349",
  storageBucket: "podcast-app-78349.appspot.com",
  messagingSenderId: "239000872688",
  appId: "1:239000872688:web:3f7a517ba97cec1c374435",
  measurementId: "G-YRN40KBS21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export{auth,db,storage};

