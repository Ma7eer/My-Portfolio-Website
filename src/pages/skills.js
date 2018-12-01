import React, { Component } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Description from '../components/Description'
import SkillsCard from '../components/SkillsCard'

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
`
// height: 100vh;

class App extends Component {
  render() {
    return (
      <>
      <Container id="skills">
        <GlobalStyle />
        <Navbar Colors={Colors} />
        <Header text="Skills"/>
        <Description text="I am interested in everything JavaScript and .NET Core" />
        <SkillsCard />

      </Container>
      </>
    )
  }
}

export default App
