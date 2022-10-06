import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1BgXgYN2mf1-cuTYLAM27gfp6BGXOYqs",
  authDomain: "chat-914ce.firebaseapp.com",
  projectId: "chat-914ce",
  storageBucket: "chat-914ce.appspot.com",
  messagingSenderId: "309858054332",
  appId: "1:309858054332:web:43ac60fdfcf6f31e6ea0b9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
