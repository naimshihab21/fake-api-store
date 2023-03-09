import styled, { css } from "styled-components"

const BaseBlueColor = css`${({theme}) => theme.commonColors.blue};`
const BaseDarkColor = css`${({theme}) => theme.commonColors.dark};`
const BaseWhiteColor = css`${({theme}) => theme.commonColors.white};`
const BaseGrayColor = css`${({theme}) => theme.commonColors.gray};`

export const ProductCards = styled.main`
  gap: 2rem;
  display: grid;
  margin: 1rem 0;
  padding: 1rem 4rem;
  background-color: ${BaseGrayColor};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  @media (max-width: 768px) {
    gap: 2rem 1rem;
    padding: 1rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

export const ProductCard = styled.div`
  gap: 1rem;
  display: flex;
  height: max-content;
  flex-direction: column;
  background-color: #FFFFFF;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  box-shadow: 0 2px 1rem rgba(0, 0, 0, .1);
`

export const ProductCardDetail = styled.section`
  gap: 1rem;
  display: flex;
  max-width: 80vw;
  margin: 2rem auto;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${BaseWhiteColor};
  box-shadow: 0 .75rem 1rem rgba(0, 0, 0, .1);
`

export const ProductCardContents = styled.div`
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: ${BaseDarkColor};

  & > div {
    gap: .5rem;
    display: flex;
    align-items: center;
    align-items: flex-start;
    justify-content: space-between;

    & > h3 {
      ${({products}) => (
        products
          ? `
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            `
          : null
      )}
    }
  }

  & > p {
    ${({products}) => (
      products
        ? `
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          `
        : null
    )}
  }

  & > a {
    padding: .75rem;
    margin-top: 1rem 0;
    text-align: center;
    border-radius: 1rem;
    text-decoration: none;
    color: ${BaseWhiteColor};
    text-transform: capitalize;
    background-color: ${BaseBlueColor};
    border: 1px solid ${BaseBlueColor};
    transition: background-color 150ms ease;
    
    &:hover {
      color: ${BaseDarkColor};
      background-color: transparent;
    }
  }

  ${({productDetail}) => (
    productDetail
      ? `
          padding: 1rem 2rem;
        `
      : null
  )}
`