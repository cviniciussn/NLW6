import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyAeK2KLTrmEyy4q5SyXSo3OwVSUzM9M97w",
    authDomain: "letmeask-71d36.firebaseapp.com",
    databaseURL: "https://letmeask-71d36-default-rtdb.firebaseio.com",
    projectId: "letmeask-71d36",
    storageBucket: "letmeask-71d36.appspot.com",
    messagingSenderId: "52056629504",
    appId: "1:52056629504:web:6ab915ffb07a1fa7b8d3e5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
