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
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}
const firebaseConfig = process.env.NODE_ENV === 'production' ? prod : dev
let app
const apps = getApps()
if (!apps.length) {
  app = initializeApp(firebaseConfig)
} else {
  app = apps[0]
}

export const auth = getAuth(app)
