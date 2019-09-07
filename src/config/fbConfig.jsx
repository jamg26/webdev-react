// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCpvVKQWB9OAa6XzzY8OfU0sgVnGyhoe6I",
  authDomain: "system0.firebaseapp.com",
  databaseURL: "https://system0.firebaseio.com",
  projectId: "system0",
  storageBucket: "",
  messagingSenderId: "465738337937",
  appId: "1:465738337937:web:86cb5fba4b5e4739ca7930"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
