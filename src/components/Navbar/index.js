import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faWrench , faArchive, faPencilAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Menu, MenuItem, IconContainer } from './elements'

const Navbar = props => {
  return (
    <>
    <Menu Colors={props.Colors}>
      <MenuItem href="/" Colors={props.Colors}>
        <IconContainer><FontAwesomeIcon icon={faUserCircle} /></IconContainer>
        About
      </MenuItem>
      <MenuItem href="/skills" Colors={props.Colors}>
        <IconContainer><FontAwesomeIcon icon={faWrench} /></IconContainer>
        Skills
      </MenuItem>
      <MenuItem href="/projects" Colors={props.Colors}>
        <IconContainer><FontAwesomeIcon icon={faArchive} /></IconContainer>
        Projects
      </MenuItem>
      <MenuItem href="/writing" Colors={props.Colors}>
        <IconContainer><FontAwesomeIcon icon={faPencilAlt} /></IconContainer>
        Writing
      </MenuItem>
      <MenuItem href="/contact" Colors={props.Colors}>
        <IconContainer><FontAwesomeIcon icon={faEnvelope} /></IconContainer>
        Contact
      </MenuItem>
    </Menu>
    <div style={{marginTop: "5rem"}}></div>
    </>
  )
}

export default Navbar