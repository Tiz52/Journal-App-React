import { initializeApp } from "firebase/app";
import { disableNetwork, getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB9MfzQtr8dwe4SLJ0K4gCsmdl5XFqGzVU",
    authDomain: "react-app-6c02c.firebaseapp.com",
    projectId: "react-app-6c02c",
    storageBucket: "react-app-6c02c.appspot.com",
    messagingSenderId: "538383818029",
    appId: "1:538383818029:web:874befc39723c24199c7a4"
  };

  initializeApp(firebaseConfig);
  
  const db = getFirestore();

  const googleAuthProvider = new GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
  }

