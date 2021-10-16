const firebaseConfig = {
  apiKey: "AIzaSyBVHCvoflS1qrfTr7mwKoEvOC_svNbB-IY",
  authDomain: "todo-clever-75a4e.firebaseapp.com",
  projectId: "todo-clever-75a4e",
  storageBucket: "todo-clever-75a4e.appspot.com",
  messagingSenderId: "811672891635",
  appId: "1:811672891635:web:521b7c9b476b4cb074c786",
  measurementId: "G-P2WDDZRND1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();