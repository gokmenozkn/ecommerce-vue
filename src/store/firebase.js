import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
require('dotenv').config();

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  databaseURL: `${process.env.DATABASE_URL}`,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.BUCKET}`,
  messagingSenderId: `${process.env.SENDER_ID}`,
  appId: `${process.env.APP_ID}`
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase