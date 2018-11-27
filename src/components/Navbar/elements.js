import styled from 'styled-components'

export const IconContainer = styled.div`
  padding: 0;
  margin: 0;
`

export const Menu = styled.ul`
  position: fixed;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  min-height: 3.5rem;
  padding: 0;
  margin: 0;
  box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.75);
  background-color: ${props => props.Colors.primary};
  @media (min-width: 780px) {
    box-shadow: none;
    align-items: center;
    ${IconContainer} {
      display: none;
    }
  }
`

export const MenuItem = styled.a`
  color: ${props => props.Colors.secondary};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 780px) {
  &:hover {
    text-decoration: underline;
  }
}
`