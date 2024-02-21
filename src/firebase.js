// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApr8jWRsrz7SYQJGbFDA89pkShDBRi4fQ",
  authDomain: "guestbook-de1c3.firebaseapp.com",
  projectId: "guestbook-de1c3",
  storageBucket: "guestbook-de1c3.appspot.com",
  messagingSenderId: "785338482782",
  appId: "1:785338482782:web:5c3d2a973416ff8f1574cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  auth,
};
