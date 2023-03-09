import {
  useContext,
  createContext,
  useState
} from "react"

const context = createContext()
export const ContextWrapper = ({ children }) => {
  const [searchProduct, setSearchProduct] = useState("")

  return (
    <context.Provider value={{
      searchProduct,
      setSearchProduct
    }}>
      { children }
    </context.Provider>
  )
}

export const useSearchProduct = () => useContext(context)