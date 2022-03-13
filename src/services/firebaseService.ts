import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { appConfig } from '../constants/appConfig'

const firebaseConfig =
  process.env.NODE_ENV === 'production'
    ? {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_ID,
        appId: process.env.APP_ID,
      }
    : appConfig().firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
