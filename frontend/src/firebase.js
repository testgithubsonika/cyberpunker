// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cyberpunker-1f53f.firebaseapp.com",
  projectId: "cyberpunker-1f53f",
  storageBucket: "cyberpunker-1f53f.firebasestorage.app",
  messagingSenderId: "1000631381741",
  appId: "1:1000631381741:web:8e57b27c184414b7ede6e4",
  measurementId: "G-BKC3ZM28N2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);