// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUA5ylZlni6DoucF2h2Ca1-mVwJloaNJU",
  authDomain: "haus-e0ff1.firebaseapp.com",
  projectId: "haus-e0ff1",
  storageBucket: "haus-e0ff1.appspot.com",
  messagingSenderId: "87251938968",
  appId: "1:87251938968:web:041ca51d50b4aac82baaed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
