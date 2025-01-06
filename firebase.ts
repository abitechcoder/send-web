import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7uJtPfZq5z7gGUy5R90on9WG9nHes_YM",
  authDomain: "send-backend.firebaseapp.com",
  projectId: "send-backend",
  storageBucket: "send-backend.appspot.com",
  messagingSenderId: "835472265771",
  appId: "1:835472265771:web:8133d35b84bbc6f5b0506e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
