import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBh6IREjJwGXUfp_IrZlLrThexMkuY9a2g",
    authDomain: "quhacks-e2a39.firebaseapp.com",
    projectId: "quhacks-e2a39",
    storageBucket: "quhacks-e2a39.firebasestorage.app",
    messagingSenderId: "769599240704",
    appId: "1:769599240704:web:e6c365880b4c49575636e5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
