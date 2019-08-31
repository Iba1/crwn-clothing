import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyABi1zBI1EI5yja1lqKQmJtCxWA4ym5fwk",
    authDomain: "crown-db1.firebaseapp.com",
    databaseURL: "https://crown-db1.firebaseio.com",
    projectId: "crown-db1",
    storageBucket: "",
    messagingSenderId: "1332971717",
    appId: "1:1332971717:web:19db550712788149"

  };

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //this reads the document but does not create it

  if(!snapShot.exists) { //when we read the document we created and if a ref does not exits, then we create one

    const { displayName, email } = userAuth;
    const creadtedAt = new Date();

    try {
      
      await 
        userRef.set({
          displayName,
          email,
          creadtedAt,
          ...additionalData
      })

    } catch (error) {

      console.log('error creating user', error.message);

    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//const provider2 = new firebase.auth.EmailAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//export const signInWithEmail = () => auth.signInWithPopup(provider2);

export default firebase;