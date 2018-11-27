import styled from 'styled-components'

export const Anchor = styled.a`
  color: ${props => props.Colors.secondary};
  font-size: 2rem;
  margin: 8px;
  @media (min-width: 780px) {
    font-size: 3rem;
    margin: 16px;
  }
`

export const AnchorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  @media (max-width: 320px) {
    height: 10vh;
  }
`