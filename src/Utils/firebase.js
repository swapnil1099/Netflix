// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK-T4-sLSH-rzs5rCH6M4N_4v0jOsiWE0",
  authDomain: "netflix-7c154.firebaseapp.com",
  projectId: "netflix-7c154",
  storageBucket: "netflix-7c154.appspot.com",
  messagingSenderId: "89114052996",
  appId: "1:89114052996:web:abf25374a83e819acaf5d1",
  measurementId: "G-5RXHX7SNXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();