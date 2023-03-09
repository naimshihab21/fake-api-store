import {
  HeaderStyled
} from "../styles/Header.styles"
import { useSearchProduct } from "./context/SearchProduct"

const Header = () => {
  const {
    searchProduct,
    setSearchProduct
  } = useSearchProduct()
  
  return (
    <HeaderStyled>
      <h1>StoreUI</h1>
      <input
        type="text"
        placeholder="Search product..."
        value={searchProduct}
        onChange={({ target }) => setSearchProduct(target.value)}
      />
    </HeaderStyled>
  )
}

export default Header