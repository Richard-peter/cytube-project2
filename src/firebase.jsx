import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWStPTCpCF7px6-Ukx7GwzsElFFLG7jzc",
  authDomain: "cytube-project2.firebaseapp.com",
  projectId: "cytube-project2",
  storageBucket: "cytube-project2.appspot.com",
  messagingSenderId: "693333611836",
  appId: "1:693333611836:web:352d6f74abe7fdc0b37a39",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
