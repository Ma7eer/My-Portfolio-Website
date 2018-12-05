import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWindowMaximize, faChartBar, faFile, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons'

import { List, ListItem } from './elements'

const LeftColumn = props => {
    return (
      <>
      <List>
        <ListItem to='/about'>
            <FontAwesomeIcon icon={faUser} style={{padding: "0 15px"}}/>
            <span>About</span>
        </ListItem>
        <ListItem  to="/projects">
            <FontAwesomeIcon icon={faWindowMaximize} style={{padding: "0 15px"}}/>
            <span>Projects</span>
        </ListItem>
        <ListItem  to="/writing">
            <FontAwesomeIcon icon={faPen} style={{padding: "0 15px"}}/>
            <span>Writing</span>
        </ListItem>
        <ListItem  to="/skills">
            <FontAwesomeIcon icon={faChartBar} style={{padding: "0 15px"}}/>
            <span>Skills</span>
        </ListItem>
        <ListItem  to="/resume">
            <FontAwesomeIcon icon={faFile} style={{padding: "0 15px"}}/>
            <span>Resume</span>
        </ListItem>
        <ListItem  to="/contact">
            <FontAwesomeIcon icon={faEnvelope} style={{padding: "0 15px"}}/>
            <span>Contact</span>
        </ListItem>
      </List>
      </>
    )
}

export default LeftColumn
