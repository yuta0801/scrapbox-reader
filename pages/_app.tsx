import { AppProps } from 'next/app'
import Head from 'next/head'

import '../assets/app.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
