import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/legacy/image'
import {
  ProductCard,
  ProductCardContents,
  ProductCards
} from '../styles/Cards.styles'
import { useSearchProduct } from './context/SearchProduct'
import { PriceStyled } from '../styles/Fonts.styles'

const URI = "https://fakestoreapi.com/products"

const Cards = () => {
  const { data, error } = useSWR(URI)
  const { searchProduct } = useSearchProduct();
  
  if (error) return <h1>{ error }</h1>
  return (
    <ProductCards>
      {data ? (
        data
          .filter((product) => {
            return searchProduct.toLowerCase() === ""
              ? product
              : product.title.toUpperCase().includes(searchProduct) ||
                product.title.toLowerCase().includes(searchProduct)
              ? product
              : null;
          })
          .map((product) => (
            <ProductCard key={product.id}>
              <Image
                alt="Book"
                width={400}
                height={300}
                loading="lazy"
                objectFit="contain"
                src={product.image}
              />
              <ProductCardContents products>
                <div>
                  <h3>{product.title}</h3>
                  <PriceStyled>${product.price}</PriceStyled>
                </div>
                <p>{product.description}</p>
                <Link
                  href={`/product/${product.id}`}
                  as={`/product/${product.id}`}
                >
                  read more
                </Link>
              </ProductCardContents>
            </ProductCard>
          ))
      ) : (
        <h1>Loading...</h1>
      )}
    </ProductCards>
  );
}

export default Cards