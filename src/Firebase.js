import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCBLaaLHUL1l-G9IqqwfOrQhTanUA0oyig",
    authDomain: "clone-f8fbd.firebaseapp.com",
    projectId: "clone-f8fbd",
    storageBucket: "clone-f8fbd.appspot.com",
    messagingSenderId: "423306721968",
    appId: "1:423306721968:web:ca3e0653d0953ea4af9975",
    measurementId: "G-1Y28010DXC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};