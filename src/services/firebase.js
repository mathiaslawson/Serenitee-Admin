import {initializeApp} from 'firebase/app'
import {
  getAuth,
  
} from 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { getFirestore} from 'firebase/firestore';

class Firebase {
  constructor() {
    this.firebase = initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.firestore = getFirestore();
  }

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

 
}

export default Firebase;
