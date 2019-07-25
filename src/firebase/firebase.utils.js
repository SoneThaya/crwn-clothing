import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDwvPtbVDzgnbWrsgA-1wqcWASeKY8Lmg0',
  authDomain: 'crwn-db-5a9e6.firebaseapp.com',
  databaseURL: 'https://crwn-db-5a9e6.firebaseio.com',
  projectId: 'crwn-db-5a9e6',
  storageBucket: '',
  messagingSenderId: '810096931046',
  appId: '1:810096931046:web:e97cd3b53cf13ad9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
