import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import RootContextProvider from '../store/context/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootContextProvider>
  )
}

export default MyApp
