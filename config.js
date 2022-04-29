import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA8vXjVlXBe_W-IBbPKvxhmcVwqMsOiuOQ",
  authDomain: "proyecto-71-73d6f.firebaseapp.com",
  projectId: "proyecto-71-73d6f",
  storageBucket: "proyecto-71-73d6f.appspot.com",
  messagingSenderId: "1040259805154",
  appId: "1:1040259805154:web:3ff0ced437991a87e113bb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
