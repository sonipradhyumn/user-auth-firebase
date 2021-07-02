import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDFYpb5BDSeIKwrXWZptA5ZQ_H-sm-QvdQ",
    authDomain: "react-user-auth-12731.firebaseapp.com",
    databaseURL: "https://react-user-auth-12731-default-rtdb.firebaseio.com",
    projectId: "react-user-auth-12731",
    storageBucket: "react-user-auth-12731.appspot.com",
    messagingSenderId: "958228640501",
    appId: "1:958228640501:web:4070cbb4fe660b9da00bbc"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;