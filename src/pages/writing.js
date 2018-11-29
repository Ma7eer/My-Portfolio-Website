import React, { Component } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Avatar from '../components/Avatar'
import Intro from '../components/Intro'
import SocialMediaLinks from '../components/SocialMediaLinks'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Description from '../components/Description'

const Colors = {
  primary: '#ffffff',
  secondary: '#232323'
}

// primary: '#232323',
// secondary: '#ffffff'

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
    font-family: Open Sans;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <>
      <Container id="about">
        <GlobalStyle />
        <Navbar Colors={Colors} />
        <Avatar Colors={Colors} />
        <Intro Colors={Colors} />
        <SocialMediaLinks Colors={Colors} />
      </Container>
      <Container id="projects">
        <Header text="Projects" />
        <Description text="I am interested in everything JavaScript and .NET Core" />
      </Container>
      <Container id="writing">
        <Header text="Writing" />
        <Description text="I am interested in everything JavaScript and .NET Core" />
      </Container>
      </>
    )
  }
}

export default App
