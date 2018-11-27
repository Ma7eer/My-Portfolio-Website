import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  margin-top: 20px;
  box-shadow: 1px 2px 5px ${props => props.Colors.secondary};
`

// border: 5px solid ${props => props.Colors.secondary};