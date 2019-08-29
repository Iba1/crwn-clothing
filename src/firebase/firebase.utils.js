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

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;