import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCwkPN6i0w4gVH5bABmL9f1L3KebWr0nAw",
  authDomain: "chat-app-69921.firebaseapp.com",
  projectId: "chat-app-69921",
  storageBucket: "chat-app-69921.appspot.com",
  messagingSenderId: "338801714725",
  appId: "1:338801714725:web:0a4dcb930f10aacb46c1cc",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
