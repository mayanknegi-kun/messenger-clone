import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdd9Q0FuFmbFKMROIfCIbS_F746yBgtJo",
  authDomain: "messenger-clone-48208.firebaseapp.com",
  databaseURL: "https://messenger-clone-48208.firebaseio.com",
  projectId: "messenger-clone-48208",
  storageBucket: "messenger-clone-48208.appspot.com",
  messagingSenderId: "158599861725",
  appId: "1:158599861725:web:d4b6c722bab118695c1234",
  measurementId: "G-7333L0CGP2"

})

const db = firebaseApp.firestore()

export default db