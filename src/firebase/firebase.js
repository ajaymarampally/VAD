import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANveSBXdoPp4IowP3Lf6-IunYmxVhMKY4",
    authDomain: "react-server-9d1c9.firebaseapp.com",
    databaseURL: "https://react-server-9d1c9.firebaseio.com",
    projectId: "react-server-9d1c9",
    storageBucket: "react-server-9d1c9.appspot.com",
    messagingSenderId: "948838424750",
    appId: "1:948838424750:web:0118798f45c9683a060d3f",
    measurementId: "G-1DVEMYK14V"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
export default firebase;
