import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAk4oHkFynwAIW6cXEnuhP80PRJmcipfKY",
  authDomain: "to-do-list-9922c.firebaseapp.com",
  databaseURL: "https://to-do-list-9922c.firebaseio.com",
  projectId: "to-do-list-9922c",
  storageBucket: "to-do-list-9922c.appspot.com",
  messagingSenderId: "1087425265038",
  appId: "1:1087425265038:web:070a31c90e137dbaeef8df",
  measurementId: "G-PKG9LVDJE5"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;