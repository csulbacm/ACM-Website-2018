// USED TO INCLUDE FIREBASE IN PROJECT
// ONLY EXPORTS, TO BE USED IN OTHER FILES

import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCRjtHrhzwYviBvndmjDQ5YvcGjj68Ye38",
  authDomain: "acm-website-2018.firebaseapp.com",
  databaseURL: "https://acm-website-2018.firebaseio.com",
  projectId: "acm-website-2018",
  storageBucket: "acm-website-2018.appspot.com",
  messagingSenderId: "344456985029"
};
firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
