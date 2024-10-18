// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApmdgsdKX0YtaK6UmpAtvfdn68xl0Nyck",
  authDomain: "test-808dc.firebaseapp.com",
  databaseURL: "https://test-808dc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-808dc",
  storageBucket: "test-808dc.appspot.com",
  messagingSenderId: "655685501948",
  appId: "1:655685501948:web:a768e442ee43818ae36879",
  measurementId: "G-DW1HK66K1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);