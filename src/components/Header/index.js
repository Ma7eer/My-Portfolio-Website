import React from 'react'

import { Title } from './elements'

const Header = props => {
  return (
    <Title>{props.text}</Title>
  )
}

export default Header