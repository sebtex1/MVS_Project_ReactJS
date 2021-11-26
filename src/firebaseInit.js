import firebase from 'firebase/app'
import 'firebase/messaging'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCIcCHEN7g9Bqmm5tNB4_0hgSvRzciX2UI',
  authDomain: 'social-app-85efe.firebaseapp.com',
  databaseURL: 'https://social-app-85efe.firebaseio.com',
  projectId: 'social-app-85efe',
  storageBucket: 'social-app-85efe.appspot.com',
  messagingSenderId: '700817176699',
  appId: '1:700817176699:web:5ebdb471e86d6429d34ade',
  measurementId: 'G-RCKL3LE69Z'
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

const publicKey =
  'BBMLQy_8MiYP8Wk7KzeL4nNvDlXQhptVHZZVDswHr94kVKYBPE5bN-x5Hx7wGuBQx-e34XCXS2Wpz4K_lkv3uTg'

export const getToken = async setTokenFound => {
  let currentToken = ''

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey })
    if (currentToken) {
      setTokenFound(true)
    } else {
      setTokenFound(false)
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error)
  }

  return currentToken
}

export const onMessageListener = () =>
  new Promise(resolve => {
    messaging.onMessage(payload => {
      resolve(payload)
    })
  })
