import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBp-LBHmzSsBCC27qi66bvmUSiXNHVa0ng",
  authDomain: "expensify-12ae9.firebaseapp.com",
  databaseURL: "https://expensify-12ae9.firebaseio.com",
  projectId: "expensify-12ae9",
  storageBucket: "expensify-12ae9.appspot.com",
  messagingSenderId: "514490701441",
  appId: "1:514490701441:web:bcd7808b41cc5250a2df80",
  measurementId: "G-0L70F508Q9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database()
database.ref().set({
  name: 'Lorand',
  age: 31,
  isSingle: false,
  location: {
    city: 'Bekescsaba',
    county: 'Hungary'
  }
})

// database.ref().set('dummy data')
database.ref('age').set(29)
database.ref('location/city').set('Békéscsaba')
database.ref('attributes').set({
  heigth: 191,
  weight: 91
})