import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/auth"

// here i want to import seed file (only ONCE!)
// import { seedDatabase } from '../seed';

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
const firebase = Firebase.initializeApp(config)
const FieldValue = Firebase.firestore;
// console.log('firebase', firebase)
// seedDatabase(firebase);

export { firebase, FieldValue };
