import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import RootContextProvider from '../store/context/UserContext'
import { queryAllItems } from '../controlers/item.controler'

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
