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
  html, body {
    background-color: ${Colors.primary};
    color: ${Colors.primary_inverse};
    font-family: Open Sans;
    padding: 0;
    margin: 0;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
`

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Navbar Colors={Colors} />
        <Avatar />
        <Intro />
        <SocialMediaLinks />
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
        <p>vcfsjbvkfsjjfnvjfnvjdfl</p>
      </Container>
    )
  }
}

export default App
