import Image from "next/legacy/image"
import {
  ProductCardContents,
  ProductCardDetail
} from "../styles/Cards.styles"
import { PriceStyled } from "../styles/Fonts.styles";

const CardProductDetail = ({ product }) => {
  return (
    <ProductCardDetail>
      <Image
        priority
        alt="Book"
        width={400}
        height={300}
        objectFit="contain"
        src={product.image}
      />
      <ProductCardContents productDetail>
        <div>
          <h4>{product.title}</h4>
          <PriceStyled>${product.price}</PriceStyled>
        </div>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
      </ProductCardContents>
    </ProductCardDetail>
  );
}

export default CardProductDetail