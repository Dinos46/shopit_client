import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { appConfig } from '../constants/appConfig'

const app = initializeApp(appConfig().firebase)

export const auth = getAuth(app)
