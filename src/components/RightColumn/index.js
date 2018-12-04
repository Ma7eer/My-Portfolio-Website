import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const RightColumn = props => {
    return (
      <>
      <div style={{backgroundColor: "white", paddingLeft: "25%"}}>
      <h1 style={{
      color: "white",
      backgroundColor: "blue",
      margin: "0",
      fontWeight: '200',
      marginBottom: '60px',
      marginTop: '0',
      padding: '30px 40px',
      textTransform: 'uppercase'}}>Contact</h1>
      <div style={{width: '95%', padding: '0 1.5rem', margin: '0 auto', maxWidth: '1280px'}}>
      <p style={{display: 'flex', alignItems: 'center'}}>
        <div style={{
            width: '55.5px', 
            height: '55.5px', 
            cursor: 'pointer', 
            backgroundColor: 'green', 
            borderRadius: '50%', 
            lineHeight: '55.5px', 
            fontSize: '1.6rem', 
            margin: '0px 15px'}}><FontAwesomeIcon style={{color: 'white', backgroundColor: 'green', marginLeft: '25%'}} icon={faEnvelope}/></div>
        <a href='/contact'>maher.alkendi2@gmail.com</a>
      </p>
      </div>
      </div>
      </>
    )
}

export default RightColumn
