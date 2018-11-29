import React, { Component } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Description from '../components/Description'

import images1 from '../images/html5.png'

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

        <div style={{width: "95%"}} className="container">
          <div className="card" style={{
            position: "relative", 
            overflow: "hidden", 
            margin: "0.5rem 0 1rem 0", 
            backgroundColor: "white",
            boxSizing: "border-box",
            borderRadius: "2px",
            backgroundClip: "padding-box",
            boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"
            }}>
            <div className="cardContent" style={{
              padding: "20px",
              borderRadius: "0 0 2px 2px",
              boxSizing: "border-box",
              backgroundClip: "padding-box"
            }}>
            <h4 style={{
              borderBottom: "1px solid #ddd", 
              marginBottom: "30px", 
              paddingBottom: "20px", 
              fontSize: "2.28rem", 
              lineHeight: "2.508rem",
              margin: "1.14rem 0 0.912rem 0",
              fontWeight: "300"}}>HTML</h4>
              <div className="row" style={{
                marginLeft: "-0.75rem", 
                marginRight: "-0.75rem", 
                textAlign: "center", 
                marginBottom: "20px"}}>
                <div className="image-container" style={{
                  float: "left",
                  boxSizing: "border-box",
                  padding: "0 0.75rem",
                  width: "16.66667%", // @media
                  marginLeft: "0", //@media
                  marginBottom: "20px"
                }}>
                  <img src={images1} style={{
                    margin: "0 auto",
                    maxHeight: "100px",
                    paddingBottom: "10px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    display: "table-cell",
                    maxWidth: "100%",
                    height: "auto",
                    border: "0",
                    }} alt=""/> HTML
                </div>
                <div className="image-container" style={{
                  float: "left",
                  boxSizing: "border-box",
                  padding: "0 0.75rem",
                  width: "16.66667%", // @media
                  marginLeft: "0" //@media
                }}>
                  <img src={images1} style={{
                    margin: "0 auto",
                    maxHeight: "100px",
                    paddingBottom: "10px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    display: "table-cell",
                    maxWidth: "100%",
                    height: "auto",
                    border: "0"}} alt=""/> HTML
                </div>
                <div className="image-container" style={{
                  float: "left",
                  boxSizing: "border-box",
                  padding: "0 0.75rem",
                  width: "16.66667%", // @media
                  marginLeft: "0" //@media
                }}>
                  <img src={images1} style={{
                    margin: "0 auto",
                    maxHeight: "100px",
                    paddingBottom: "10px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    display: "table-cell",
                    maxWidth: "100%",
                    height: "auto",
                    border: "0"}} alt=""/> HTML
                </div>
                </div>
            </div>
            </div>
            
        </div>

      </Container>
      </>
    )
  }
}

export default App
