import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const prod = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

const apps = getApps()
let app = apps[0]
if (!app) {
  app = initializeApp(prod)
}

export const auth = getAuth(app)
