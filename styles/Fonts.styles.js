import styled from "styled-components"

export const PriceStyled = styled.h2`
  font-size: clamp(.75rem, 50vw, 1.2rem);

  @media (max-width: 300px) {
    font-size: 7vmin;
  }
`