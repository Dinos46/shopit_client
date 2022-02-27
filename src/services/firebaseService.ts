import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { appConfig } from '../../constants/app.config'

const firebaseConfig = {
  apiKey: appConfig.dev.firebase.apiKey,
  authDomain: appConfig.dev.firebase.authDomain,
  projectId: appConfig.dev.firebase.projectId,
  storageBucket: appConfig.dev.firebase.storageBucket,
  messagingSenderId: appConfig.dev.firebase.messagingSenderId,
  appId: appConfig.dev.firebase.appId,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
