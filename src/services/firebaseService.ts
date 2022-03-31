import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { appConfig } from '../../constants/appConfig'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
}
let app
const apps = getApps()
if (!apps.length) {
  app = initializeApp(firebaseConfig)
} else {
  app = apps[0]
}

export const auth = getAuth(app)
