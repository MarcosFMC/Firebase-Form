import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCb42qkcreuqc8iRNeVrV-ye8PyKgLaBNQ",
  authDomain: "challenge-4492d.firebaseapp.com",
  databaseURL: "https://challenge-4492d-default-rtdb.firebaseio.com",
  projectId: "challenge-4492d",
  storageBucket: "challenge-4492d.appspot.com",
  messagingSenderId: "677321261582",
  appId: "1:677321261582:web:a72da5bb7e9b5ed113725f",
  measurementId: "G-P6B40SN7VN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





