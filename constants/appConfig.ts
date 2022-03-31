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

    default:
      return {
        firebase: {
          apiKey: 'AIzaSyDh22SV9RexvW-8zGgYX1c6oXg4p9NrHEo',
          authDomain: 'shopit-fake-store.firebaseapp.com',
          projectId: 'shopit-fake-store',
          storageBucket: 'shopit-fake-store.appspot.com',
          messagingSenderId: '147434054650',
          appId: '1:147434054650:web:e96378f1522bea20d23a43',
        },
        baseUrl: 'http://localhost:5000/graphql',
      }
  }
}
