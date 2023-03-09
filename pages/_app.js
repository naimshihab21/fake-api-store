import { ContextWrapper } from '../components/context/SearchProduct'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  )
}

export default MyApp
