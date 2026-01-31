import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdMVSEnyMdyVvxB5v-F9kxWI3NxH5SktQ",
  authDomain: "leave-management-system-a45f8.firebaseapp.com",
  projectId: "leave-management-system-a45f8",
  storageBucket: "leave-management-system-a45f8.firebasestorage.app",
  messagingSenderId: "827727247080",
  appId: "1:827727247080:web:879d0199047b9241123b5d",
  measurementId: "G-7SEWN77G9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;