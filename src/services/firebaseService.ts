import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const prod = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
}
const dev = {
  apiKey: 'AIzaSyDh22SV9RexvW-8zGgYX1c6oXg4p9NrHEo',
  authDomain: 'shopit-fake-store.firebaseapp.com',
  projectId: 'shopit-fake-store',
  storageBucket: 'shopit-fake-store.appspot.com',
  messagingSenderId: '147434054650',
  appId: '1:147434054650:web:e96378f1522bea20d23a43',
}
const firebaseConfig = process.env.NODE_ENV === 'production' ? prod : dev
// let app
// const apps = getApps()
// if (!apps.length) {
//   app = initializeApp({
//     apiKey: 'AIzaSyDh22SV9RexvW-8zGgYX1c6oXg4p9NrHEo',
//     authDomain: 'shopit-fake-store.firebaseapp.com',
//     projectId: 'shopit-fake-store',
//     storageBucket: 'shopit-fake-store.appspot.com',
//     messagingSenderId: '147434054650',
//     appId: '1:147434054650:web:e96378f1522bea20d23a43',
//   })
// } else {
//   app = apps[0]
// }

export const initFirebase = () => {
  const apps = getApps()
  if (!apps.length) {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    return auth
  }
  const auth = getAuth(apps[0])
  return auth
}
