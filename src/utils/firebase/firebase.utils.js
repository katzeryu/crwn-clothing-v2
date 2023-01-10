import { initializeApp } from "firebase/app";
import {
  getAuth,
  SignInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAykOmcsYXnZ_5LWZomP5nGSNQ5rhY84Xo",
  authDomain: "crwn-clothing-db-1dcad.firebaseapp.com",
  projectId: "crwn-clothing-db-1dcad",
  storageBucket: "crwn-clothing-db-1dcad.appspot.com",
  messagingSenderId: "1085190362792",
  appId: "1:1085190362792:web:391382ad5ba8b6fb77949d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};
