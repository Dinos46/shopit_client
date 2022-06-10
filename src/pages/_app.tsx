//REAXT-NEXT
import type { AppProps } from 'next/app'
import { ComponentType } from 'react'
//GLOBAL STYLES
import '../styles/globals.css'
//APP STATE
import RootContextProvider from '../store/context/UserContext'
//COMPONENTS HOOKS TYPES
import { Layout } from '../components'

type componentsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: ComponentType
  }
}

function MyApp({ Component, pageProps }: componentsWithLayout) {
  return (
    <RootContextProvider>
      <Layout>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </RootContextProvider>
  )
}

export default MyApp
