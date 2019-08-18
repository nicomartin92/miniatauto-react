import firebase from 'firebase/app';
import 'firebase/firestore'; // database
import 'firebase/auth'; // authentification

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgdZoD03BClYKEjib8f8Q7_Kf3-NBYbMM",
    authDomain: "modelcars-bbc20.firebaseapp.com",
    databaseURL: "https://modelcars-bbc20.firebaseio.com",
    projectId: "modelcars-bbc20",
    storageBucket: "",
    messagingSenderId: "950165571883",
    appId: "1:950165571883:web:04379f9e200a762d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
}); // update changes

export default firebase;