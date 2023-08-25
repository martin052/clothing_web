import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
  getFirestore, doc, getDoc, setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaFGfm4PM1-w2pFDdcpG1CeUZb6nAkJ0M",
    authDomain: "matchmel-db.firebaseapp.com",
    projectId: "matchmel-db",
    storageBucket: "matchmel-db.appspot.com",
    messagingSenderId: "1021685205472",
    appId: "1:1021685205472:web:2bbeb4dba7621f6a8a8385"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

export const auth = getAuth();
export const SignInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  //if not exists
    //create / set doc ith data om userAuth in my collection


  //if user data exists
    //return user doc ref
return userDocRef;
};