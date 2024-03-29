// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECTID, 
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGINGSENDERID, 
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = app.auth ()

export default app;