// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1btN1J190MQLrVte4sSOYdZ1qfBxGE9o",
  authDomain: "online-job-portal-4dc73.firebaseapp.com",
  projectId: "online-job-portal-4dc73",
  storageBucket: "online-job-portal-4dc73.firebasestorage.app",
  messagingSenderId: "494694877928",
  appId: "1:494694877928:web:a404b0bdb51795386a175d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};