import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { fireBaseDev } from '../../appConfig/config'

const prod = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
}

const firebaseConfig =
  process.env.NODE_ENV === 'production' ? prod : fireBaseDev
const apps = getApps()
let app = apps[0]
if (!app) {
  app = initializeApp(firebaseConfig)
}

export const auth = getAuth(app)
