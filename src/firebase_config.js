import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCKHNm7t0jsXmumbsMTFDrFubv_m0h_4c8",
    authDomain: "todoapp-cac0c.firebaseapp.com",
    projectId: "todoapp-cac0c",
    storageBucket: "todoapp-cac0c.appspot.com",
    messagingSenderId: "749023332458",
    appId: "1:749023332458:web:3a97eafc6d6443b3806213"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db }