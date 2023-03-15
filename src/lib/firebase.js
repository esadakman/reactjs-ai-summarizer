import {  initializeApp } from 'firebase/app' 
import "firebase/firestore";
import "firebase/auth";
import { Firestore } from 'firebase/firestore';

// here i want to import seed file (only ONCE!)

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID, 
};

//  here is where i want to call the seed file (only ONCE!)
// seedDatabase(firebase);
const firebase = initializeApp(config);
const { FieldValue } = Firestore;
console.log('firebase', firebase)

export { firebase, FieldValue };
