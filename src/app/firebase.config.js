// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAEJIgJnURjznYECQUuVaL-BBoL76I0q8",
    authDomain: "my-todo-list-46014.firebaseapp.com",
    projectId: "my-todo-list-46014",
    storageBucket: "my-todo-list-46014.appspot.com",
    messagingSenderId: "356230318376",
    appId: "1:356230318376:web:2816d76b933f9e79bd281d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);