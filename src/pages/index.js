import React, { Component } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Avatar from '../components/Avatar'
import Intro from '../components/Intro'
import SocialMediaLinks from '../components/SocialMediaLinks'
import Navbar from '../components/Navbar'

const Colors = {
  primary: '#232323',
  primary_inverse: '#ffffff'
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.primary};
    color: ${Colors.primary_inverse};
    font-family: Open Sans;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Navbar />
        <Avatar />
        <Intro />
        <SocialMediaLinks />
      </Container>
    )
  }
}

export default App
