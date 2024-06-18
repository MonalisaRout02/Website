// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyBwwhW0NGFnGz237RFN3B91keZVxuJv2U8",
//   authDomain: "saptosi-jewellers.firebaseapp.com",
//   projectId: "saptosi-jewellers",
//   storageBucket: "saptosi-jewellers.appspot.com",
//   messagingSenderId: "441708800340",
//   appId: "1:441708800340:web:75f4050129af9e113b40c1",
//   measurementId: "G-VKKN3QLCE2"
  apiKey: "AIzaSyC6ZYI59QWT4lr5dv7ZeMKBii8EcVYefWU",
  authDomain: "saptosijewels.firebaseapp.com",
  projectId: "saptosijewels",
  storageBucket: "saptosijewels.appspot.com",
  messagingSenderId: "830705800279",
  appId: "1:830705800279:web:f2520b99a8790b2b1fbf12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }