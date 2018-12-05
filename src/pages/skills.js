import React, { Component } from "react"
import { createGlobalStyle } from 'styled-components'

import LeftColumn from '../components/LeftColumn'
import RightColumn from "../components/RightColumn";

// const Colors = {
//   primary: '#ffffff',
//   secondary: '#232323'
// }

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Open Sans;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
`

// const Container = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   object-fit: cover;
//   height: 100vh;
// `

class About extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <LeftColumn />
      <RightColumn page='skills'/>
      </>
    )
  }
}

export default About
