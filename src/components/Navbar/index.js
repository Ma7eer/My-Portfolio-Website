import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faWrench , faArchive, faPencilAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Menu, MenuItem, IconContainer } from './elements'

const Navber = props => {
  return (
    <>
    <Menu Colors={props.Colors}>
      <MenuItem href="#">
        <IconContainer><FontAwesomeIcon icon={faUserCircle} /></IconContainer>
        About
      </MenuItem>
      <MenuItem href="#">
        <IconContainer><FontAwesomeIcon icon={faWrench} /></IconContainer>
        Skills
      </MenuItem>
      <MenuItem href="#">
        <IconContainer><FontAwesomeIcon icon={faArchive} /></IconContainer>
        Projects
      </MenuItem>
      <MenuItem href="#">
        <IconContainer><FontAwesomeIcon icon={faPencilAlt} /></IconContainer>
        Writing
      </MenuItem>
      <MenuItem href="#">
        <IconContainer><FontAwesomeIcon icon={faEnvelope} /></IconContainer>
        Contact
      </MenuItem>
    </Menu>
    <div style={{marginTop: "4rem"}}></div>
    </>
  )
}

export default Navber