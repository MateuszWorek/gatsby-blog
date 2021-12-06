import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const HeroWrapper = styled.div`
  margin: 20px 0 0 0;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h2 {
    colors: ${colors.blueShade1}
    margin: 20px;

    @media screen and (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  button {
    font-family: "Muli Black", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: ${colors.white};
    text-transform: uppercase;
    border: 0;
    border-bottom: 4px solid ${colors.blueShade1};
    padding: 5px 0;
    background-color: transparent;
    transition: all 0.3s ease;

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`
