import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// const prod = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
// }

const prod = {
  apiKey: 'AIzaSyAeIyEmy0Run--3trdXiLH4gzhZLi2Q8ww',
  authDomain: 'shopit-fake-store-7cd6e.firebaseapp.com',
  projectId: 'shopit-fake-store-7cd6e',
  storageBucket: 'shopit-fake-store-7cd6e.appspot.com',
  messagingSenderId: '960824443656',
  appId: '1:960824443656:web:e1deb2fd2f2f02e0ae62bd',
}

!getApps().length ? initializeApp(prod) : getApp()
export const auth = getAuth()
