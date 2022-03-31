export const appConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        firebase: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_ID,
          appId: process.env.APP_ID,
        },
        baseUrl: 'https://shopit-fake-store.herokuapp.com/graphql',
      }
  }
}
