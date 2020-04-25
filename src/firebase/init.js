import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyBz1hKzQOQjTfmlNSF8czauRKEygDkSpms",
    authDomain: "recipes-a0b01.firebaseapp.com",
    databaseURL: "https://recipes-a0b01.firebaseio.com",
    projectId: "recipes-a0b01",
    storageBucket: "recipes-a0b01.appspot.com",
    messagingSenderId: "937007463770",
    appId: "1:937007463770:web:6615d7e9d12adcdb6c8763"
  };
  // Initialize Firebase
  const db = firebase.initializeApp(firebaseConfig);

  export default db.firestore()
