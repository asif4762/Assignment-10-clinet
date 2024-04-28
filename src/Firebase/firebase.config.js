// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPS3fmqgZfVkl9NnuJiW-Op8wcXkRn7gQ",
  authDomain: "assignment-10-5b48d.firebaseapp.com",
  projectId: "assignment-10-5b48d",
  storageBucket: "assignment-10-5b48d.appspot.com",
  messagingSenderId: "98027976787",
  appId: "1:98027976787:web:b3dfafcf3f0655409f6ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;