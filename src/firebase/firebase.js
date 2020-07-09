import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database()
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, GoogleAuthProvider, database as default}

// // clild_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = []
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })
// //     console.log(expenses)
// //   })
  
// // database.ref('expenses').push({
// //   description: 'Rent',
//   amount: 109500,
//   createdAt: 16447897,
//   note: 'albi'
// })

// database.ref('notes/-MBhiqOIuQpgBnpH97ir').remove()

// database.ref('notes').push({
//   title: 'Second note',
//   body: 'This is my muhahah note'
// })

// const firebaseNotes = {
//   notes: {
//     arfsd: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     fsdazgdg: {
//       title: 'Second note',
//        body: 'This is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// },{
//   id: '1232',
//   title: 'Second note',
//   body: 'This is my note'
// }]
// database.ref('notes').set(firebaseNotes)

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val =snapshot.val()
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data');
// });


// database.ref().on('value', (snapshot) => {
//  const val= snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })


// database.ref().set({
//   name: 'Lorand',
//   age: 31,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Bekescsaba',
//     county: 'Hungary'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This is failed', e)
// })


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref()
// .remove()
// .then(() => {
//   console.log('data removed');
// })
// .catch(() => {
//   console.log('data didn\'t removed');
// })