import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { fireBaseDev } from '../../appConfig/config'

// const prod = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyDh22SV9RexvW-8zGgYX1c6oXg4p9NrHEo',
  authDomain: 'shopit-fake-store.firebaseapp.com',
  projectId: 'shopit-fake-store',
  storageBucket: 'shopit-fake-store.appspot.com',
  messagingSenderId: '147434054650',
  appId: '1:147434054650:web:e96378f1522bea20d23a43',
}

const apps = getApps()
let app = apps[0]
if (!app) {
  app = initializeApp(firebaseConfig)
}

export const auth = getAuth(app)
