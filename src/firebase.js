import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFOBgzbyJy0JHn6wQPd1FEt6rzjwT7mn0",
  authDomain: "react-ts-redux-movie-app.firebaseapp.com",
  projectId: "react-ts-redux-movie-app",
  storageBucket: "react-ts-redux-movie-app.appspot.com",
  messagingSenderId: "1073950666315",
  appId: "1:1073950666315:web:9cc4d69086384d7c62a7ce",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const user = auth.currentUser;
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      window.location("/");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logOut = async () => {
  await signOut(auth);
};
