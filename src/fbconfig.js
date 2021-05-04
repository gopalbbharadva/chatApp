import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBlFW3zs_X7R_0WupC0zmC3O6DaOJTCHdY",
    authDomain: "chatapp-c7ee6.firebaseapp.com",
    projectId: "chatapp-c7ee6",
    storageBucket: "chatapp-c7ee6.appspot.com",
    messagingSenderId: "827528465083",
    appId: "1:827528465083:web:977ae405e629a35ead379e"
  };
  

  firebase.initializeApp(firebaseConfig);
  const firestoreRef=firebase.firestore();
  
  
  export default firestoreRef;
