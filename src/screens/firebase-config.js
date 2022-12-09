// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA__92SLEyT90VNdPnxDPRsFT9BnPNIOuM",
  authDomain: "firstapp-73458.firebaseapp.com",
  projectId: "firstapp-73458",
  storageBucket: "firstapp-73458.appspot.com",
  messagingSenderId: "627637491439",
  appId: "1:627637491439:web:6d4caf2bd7bbb9a973ad1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };