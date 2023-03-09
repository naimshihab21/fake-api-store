import { SWRConfig } from "swr"
import { ThemeProvider } from 'styled-components'
import dynamic from "next/dynamic"
import { useThemeProvider } from "../components/custom_hooks/useThemeProvider"

const Header = dynamic(() => import("../components/Header"))
const Layout = dynamic(() => import("../components/Layout"))
const Cards = dynamic(() => import("../components/Cards"))
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Home = () => {
  const {
    theme
  } = useThemeProvider()

  return (
    <Layout title="Home - Fake API Store">
      <ThemeProvider theme={theme}>
        <Header />
        <SWRConfig value={{ fetcher }}>
          <Cards />
        </SWRConfig>
      </ThemeProvider>
    </Layout>
  )
}

export default Home