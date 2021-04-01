import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC--djVMb0TtQFT5CsM06AU13ZP57u7nYo",
    authDomain: "eventos-ad727.firebaseapp.com",
    projectId: "eventos-ad727",
    storageBucket: "eventos-ad727.appspot.com",
    messagingSenderId: "17003507331",
    appId: "1:17003507331:web:90afc94340f74ef27bf5b6",
    measurementId: "G-N8Y0CX0EWR"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();