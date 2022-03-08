import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDh22SV9RexvW-8zGgYX1c6oXg4p9NrHEo',
  authDomain: 'shopit-fake-store.firebaseapp.com',
  projectId: 'shopit-fake-store',
  storageBucket: 'shopit-fake-store.appspot.com',
  messagingSenderId: '147434054650',
  appId: '1:147434054650:web:e96378f1522bea20d23a43',
}
// const apps = getApps()
// if (!apps.length) {
// }
const app = initializeApp(firebaseConfig)
console.log(process.env)
export const auth = getAuth(app)
