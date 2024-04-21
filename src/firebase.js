
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn6hVRu02AascT6xLmZJI-GSmYPdtgI-U",
  authDomain: "learning-firebase-8e527.firebaseapp.com",
  databaseURL: "https://learning-firebase-8e527-default-rtdb.firebaseio.com",
  projectId: "learning-firebase-8e527",
  storageBucket: "learning-firebase-8e527.appspot.com",
  messagingSenderId: "234118391559",
  appId: "1:234118391559:web:97a4cca9f2380b66ca07a2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};