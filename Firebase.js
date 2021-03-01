import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBQgZfyn8o8wBLqmGcjmQzT0ESlWodWs80",
    authDomain: "hackathon-b0b39.firebaseapp.com",
    projectId: "hackathon-b0b39",
    storageBucket: "hackathon-b0b39.appspot.com",
    messagingSenderId: "569231235189",
    appId: "1:569231235189:web:5737537007f72ad22e003c"
}

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;