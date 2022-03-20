import type { NextApiRequest, NextApiResponse } from 'next'
import { getApps, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auth>
) {
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

  const auth = getAuth(app)

  res.status(200).json(auth)
}
