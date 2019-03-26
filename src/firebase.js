import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCq8vlSQz47Bfq0L2lmXk1silY_vSryhZQ",
    authDomain: "sk-chat-slack.firebaseapp.com",
    databaseURL: "https://sk-chat-slack.firebaseio.com",
    projectId: "sk-chat-slack",
    storageBucket: "sk-chat-slack.appspot.com",
    messagingSenderId: "237530761263"
  };
firebase.initializeApp(config);

export default firebase;
