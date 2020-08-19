import { AppProps } from 'next/app'

import '../assets/app.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
