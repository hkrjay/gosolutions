// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAFteFWNVbZDHKgk8bkg-USzNZ3nhpA4S8",
    authDomain: "gosolutions.firebaseapp.com",
    databaseURL: "https://gosolutions-default-rtdb.firebaseio.com",
    projectId: "gosolutions",
    storageBucket: "gosolutions.firebasestorage.app",
    messagingSenderId: "163606984499",
    appId: "1:163606984499:web:acda576f8875de231a3046",
    measurementId: "G-H23WWL42N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app);

export async function saveFormDataRealtime(data) {
    const dbRef = ref(database, 'gosolutions');
    await push(dbRef, data);
  }