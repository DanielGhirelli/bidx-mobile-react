import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxv42dfZFfs7KYW7ha8DZ1Ze3UV3JuinE",
  authDomain: "bidx-c89c4.firebaseapp.com",
  projectId: "bidx-c89c4",
  storageBucket: "bidx-c89c4.firebasestorage.app",
  messagingSenderId: "312625322727",
  appId: "1:312625322727:web:84889d8c4607b99ad42042",
  measurementId: "G-L7BPSHKKBE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
