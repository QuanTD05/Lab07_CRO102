import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63HSrdp7Twb-_6Zjcae-bpdYtE94Jqbs",
  authDomain: "lab07-3cd7d.firebaseapp.com",
  projectId: "lab07-3cd7d",
  storageBucket: "lab07-3cd7d.firebasestorage.app",
  messagingSenderId: "1053846858889",
  appId: "1:1053846858889:web:b29e3a7c47d4ac3ab3aa58",
  measurementId: "G-0Y3MV7VBB0"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);