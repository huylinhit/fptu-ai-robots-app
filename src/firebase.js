// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ypc7XcJs0XszGgROjjN9b4lps4VZpEY",
  authDomain: "fptu-ai-robots.firebaseapp.com",
  databaseURL: "https://fptu-ai-robots-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fptu-ai-robots",
  storageBucket: "fptu-ai-robots.appspot.com",
  messagingSenderId: "237144214141",
  appId: "1:237144214141:web:2f94332223f6932b9c7f14",
  measurementId: "G-9B7FPSP67J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database }
