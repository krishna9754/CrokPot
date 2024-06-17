// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm2fzOXyVypdJPPrCnPEi4vpMQFyIwLrk",
  authDomain: "crokpot-3c49d.firebaseapp.com",
  projectId: "crokpot-3c49d",
  storageBucket: "crokpot-3c49d.appspot.com",
  messagingSenderId: "420499691688",
  appId: "1:420499691688:web:8d3c8c89b320f7cc6f8a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app