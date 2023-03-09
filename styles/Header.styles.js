import styled, { css, keyframes } from "styled-components"

const BaseBlueColor = css`${({theme}) => theme.commonColors.blue};`
const BaseWhiteColor = css`${({theme}) => theme.commonColors.white};`

const InputAnimate = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(.97); }
  100% { transform: scale(1); }
`

export const HeaderStyled = styled.header`
  top: 0;
  z-index: 1;
  display: flex;
  position: sticky;
  padding: 1rem 4rem;
  align-items: center;
  color: ${BaseWhiteColor};
  justify-content: space-between;
  background-color: ${BaseBlueColor};

  & input {
    border: none;
    padding: .5rem 1rem;
    border-radius: 1rem;
    caret-color: #303030;

    &:focus {
      outline: none;
      animation: ${InputAnimate} 150ms ease;
    }

    @media (max-width: 300px) {
      width: min(50vw);
    }
  }

  @media (max-width: 600px) {
    gap: .75rem;
    padding: 1rem 2rem;
    flex-direction: column;
  }
`

export const HeaderDetailProduct = styled.header`
  display: flex;
  padding: 1rem 4rem;
  background-color: ${BaseBlueColor};
  position: sticky;
  top: 0;
  z-index: 1;

  & a {
    gap: .75rem;
    display: inline-flex;
    text-decoration: none;
    color: ${BaseWhiteColor};
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`