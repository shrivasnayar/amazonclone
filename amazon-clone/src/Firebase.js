import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcZFd-mTMXLaQoV2l-ova9bamsyc67Zak",
    authDomain: "clone-5dd83.firebaseapp.com",
    databaseURL: "https://clone-5dd83.firebaseio.com",
    projectId: "clone-5dd83",
    storageBucket: "clone-5dd83.appspot.com",
    messagingSenderId: "489182953971",
    appId: "1:489182953971:web:caf3dafb778489d9cb9286",
    measurementId: "G-T8ZB1T1P0X"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };