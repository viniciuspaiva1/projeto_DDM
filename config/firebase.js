import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc  } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYiFACsT0GpphDjcGYa77FhGyP__VbAbM",
  authDomain: "teste-firestore-c2589.firebaseapp.com",
  projectId: "teste-firestore-c2589",
  storageBucket: "teste-firestore-c2589.appspot.com",
  messagingSenderId: "817318686457",
  appId: "1:817318686457:web:480cd42da9504b00be7c28",
  measurementId: "G-L3174PV2X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// initialize firestore
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }