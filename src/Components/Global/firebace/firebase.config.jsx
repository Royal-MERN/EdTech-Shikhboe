// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF6_0LQx0-AivH7wHsmXOrXxwRlk8Qf2Y",
  authDomain: "tochat-5413d.firebaseapp.com",
  projectId: "tochat-5413d",
  storageBucket: "tochat-5413d.appspot.com",
  messagingSenderId: "452287361247",
  appId: "1:452287361247:web:98ab7795d50313b3f3b96a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app