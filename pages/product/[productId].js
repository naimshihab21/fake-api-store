import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { ThemeProvider } from "styled-components"
import CardProductDetail from "../../components/CardProductDetail"
import { useThemeProvider } from "../../components/custom_hooks/useThemeProvider"

const Layout = dynamic(() => import("../../components/Layout"))
const HeaderDetail = dynamic(() => import("../../components/HeaderDetail"))
const URI = "https://fakestoreapi.com/products"

export const getStaticPaths = async () => {
  const res = await fetch(URI)
  const data = await res.json()

  const paths = data.map(product => {
    return {
      params: {
        productId: product.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const id = context.params.productId
  const res = await fetch(`${URI}/${id}`)
  const product = await res.json()

  return {
    props: { product }
  }
}

const ProductDetail = ({ product }) => {
  const router = useRouter()
  const { theme } = useThemeProvider()
  const { productId } = router.query

  return (
    <Layout title={`Product - ${productId}`}>
      <ThemeProvider theme={theme}>
        <HeaderDetail />
        <CardProductDetail product={product} />
      </ThemeProvider>
    </Layout>
  )
}

export default ProductDetail