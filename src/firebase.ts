import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'

var firebaseConfig = {
  apiKey: 'AIzaSyBHHT5ZaTFEaqkZOBY8e0Zrrf_Z5PfHsGY',
  authDomain: 'react-study-b1b5f.firebaseapp.com',
  databaseURL: 'https://react-study-b1b5f.firebaseio.com',
  projectId: 'react-study-b1b5f',
  storageBucket: 'react-study-b1b5f.appspot.com',
  messagingSenderId: '1012252672831',
  appId: '1:1012252672831:web:e1c348a158ba1709d7c98a',
  measurementId: 'G-2CH7KE3X4H',
}

// Initialize Firebasse
firebase.initializeApp(firebaseConfig)

export default firebase
