import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXyYZA2rx1Cx0V7_iYzdY0-fGOsZGq_Hg',
  authDomain: 'muso-ninjas-28175.firebaseapp.com',
  projectId: 'muso-ninjas-28175',
  storageBucket: 'muso-ninjas-28175.appspot.com',
  messagingSenderId: '233768853247',
  appId: '1:233768853247:web:6bfbb63f00f15e27a776ca',
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
