import * as firebase from 'firebase'

const prodConfig = {
  apiKey: 'AIzaSyA-z-7OiVHVG69p_Ewcln_BtXb6W_TracA',
  authDomain: 'club-app-fddaa.firebaseapp.com',
  databaseURL: 'https://club-app-fddaa.firebaseio.com',
  projectId: 'club-app-fddaa',
  storageBucket: 'club-app-fddaa.appspot.com',
  messagingSenderId: '366099624090'
}

const devConfig = {
  apiKey: 'AIzaSyA-z-7OiVHVG69p_Ewcln_BtXb6W_TracA',
  authDomain: 'club-app-fddaa.firebaseapp.com',
  databaseURL: 'https://club-app-fddaa.firebaseio.com',
  projectId: 'club-app-fddaa',
  storageBucket: 'club-app-fddaa.appspot.com',
  messagingSenderId: '366099624090'
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
