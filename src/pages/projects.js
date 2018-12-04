import React, { Component } from "react"
// import styled, { createGlobalStyle } from 'styled-components'

import LeftColumn from '../components/LeftColumn'
import Header from '../components/Header'

// const Colors = {
//   primary: '#ffffff',
//   secondary: '#232323'
// }

// const GlobalStyle = createGlobalStyle`
//   html, body {
//     background-color: ${Colors.primary};
//     color: ${Colors.secondary};
//     font-family: Open Sans;
//     padding: 0;
//     margin: 0;
//     scroll-behavior: smooth;
//   }
// `

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
      <LeftColumn />
      <div style={{backgroundColor: "white", marginLeft: "25%"}}>
      <h1 style={{color: "black"}}>This is the Projects page</h1>
      </div>
      </>
    )
  }
}

export default About
