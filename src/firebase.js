import firebase from "firebase/app";
import "firebase/database";


let  firebaseConfig = {
  apiKey: "AIzaSyCyT-2M7iVVXJcXExSf76i7-JnJ2ROrl6M",
  authDomain: "at-infnet-41425.firebaseapp.com",
  projectId: "at-infnet-41425",
  storageBucket: "at-infnet-41425.appspot.com",
  messagingSenderId: "566589325519",
  appId: "1:566589325519:web:68e53d6290aeec292777ba"
};

firebase.initializeApp(firebaseConfig);


export default firebase.database();
