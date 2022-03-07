export const appConfig = {
  dev: {
    firebase: {
      apiKey: process.env.NEXT_PUBLIC_APP_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
    },
    baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  },
  prod: {
    firebase: {
      apiKey: process.env.NEXT_PUBLIC_PROD_APP_KEY,
      authDomain: process.env.NEXT_PUBLIC_PROD_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROD_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_PROD_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_PROD_MESSAGING_ID,
      appId: process.env.NEXT_PUBLIC_PROD_APP_ID,
    },
    baseUrl: process.env.NEXT_PUBLIC_PROD_APP_BASE_URL,
  },
}
