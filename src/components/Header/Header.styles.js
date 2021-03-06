import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  height: 70px;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`

export const Logo = styled.img`
  max-width: 100px;

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`
