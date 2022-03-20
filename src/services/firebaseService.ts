import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDh22SV9RexvW-8zGgYX1c6oXg4p9NrHEo',
  authDomain: 'shopit-fake-store.firebaseapp.com',
  projectId: 'shopit-fake-store',
  storageBucket: 'shopit-fake-store.appspot.com',
  messagingSenderId: '147434054650',
  appId: '1:147434054650:web:e96378f1522bea20d23a43',
}
// console.log('first',process.env.API_KEY)
let app
const apps = getApps()
if (!apps.length) {
  app = initializeApp(firebaseConfig)
} else {
  app = apps[0]
}

export const auth = getAuth(app)
