import React, { Component } from "react"
// import styled, { createGlobalStyle } from 'styled-components'

import avatar from '../images/profile.jpg'

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

class App extends Component {
  render() {
    return (
      <>
      <aside style={{
        backgroundColor: "black", 
        top: "0", bottom: "0", 
        left: "0", 
        position: "fixed", 
        overflow: "hidden",
        zIndex: "2",
        width: "25%",
        color: "#fff",
        textAlign: "left"
        }} className="sidebar">
        <div className="inner-sidebar" style={{
          position: "relative",
          height: "100%",
          overflowY: "auto",
          padding: "45px 40px"
          }}>
          <div className="avatar" style={{textAlign: "center", display:"block", color: "inherit"}}>
          <div className="image-container" style={{borderRadius: "50%", marginBottom: "10px"}}>
          <img src={avatar} alt="" style={{width: "152px", height: "auto", borderRadius: "50%"}}/>
          </div>
          <div className="content-container" style={{marginLeft: "-40px", marginRight: "-40px"}}>
          <h1 style={{fontSize: "22px", fontWeight: "500"}}>MAHER ALKENDI</h1>
          <h2 style={{fontSize: "16px", fontWeight: "300"}}>FULL-STACK WEB DEVELOPER</h2>
          </div>
          </div>
          </div>
        </aside>
      <div style={{backgroundColor: "white"}}></div>
      </>
    )
  }
}

export default App
