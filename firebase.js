import firebase from 'firebase/app';
var firebaseConfig = {
  apiKey: "AIzaSyAjoz73adUarpdzRZD2_P89d9K6AaG9_uU",
  authDomain: "jhon-database.firebaseapp.com",
  databaseURL: "https://jhon-database.firebaseio.com",
  projectId: "jhon-database",
  storageBucket: "jhon-database.appspot.com",
  messagingSenderId: "628661598580",
  appId: "1:628661598580:web:920d178f7518b3f0639421",
  measurementId: "G-TFF1X0E4YE"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export  default fire;