import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from "../Layout/Layout"
import { store } from '../store'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (profile: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((profile) => profile)
  
  return (
    <Provider store={store}>
            <Layout>
              { getLayout(<Component {...pageProps} />) }
            </Layout>
    </Provider>
  )
}
