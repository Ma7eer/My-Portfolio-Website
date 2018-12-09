import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWindowMaximize, faChartBar, faFile, faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons'
import { slide as Menu } from 'react-burger-menu'

import { List, ListItem } from './elements'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '20px',
      top: '23px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'initial'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  
class LeftColumn extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      
      componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    render () {
        if (this.state.width < 992) {
            return (
            <Menu styles={styles} left>
                  <ListItem to='/about' className="menu-item">
                      <FontAwesomeIcon icon={faUser} style={{padding: "0 15px"}}/>
                      <span>About</span>
                  </ListItem>
                  <ListItem  to="/projects" className="menu-item">
                      <FontAwesomeIcon icon={faWindowMaximize} style={{padding: "0 15px"}}/>
                      <span>Projects</span>
                  </ListItem>
                  <ListItem  to="/writing" className="menu-item">
                      <FontAwesomeIcon icon={faPen} style={{padding: "0 15px"}}/>
                      <span>Writing</span>
                  </ListItem>
                  <ListItem  to="/skills" className="menu-item">
                      <FontAwesomeIcon icon={faChartBar} style={{padding: "0 15px"}}/>
                      <span>Skills</span>
                  </ListItem>
                  <ListItem  to="/resume" className="menu-item">
                      <FontAwesomeIcon icon={faFile} style={{padding: "0 15px"}}/>
                      <span>Resume</span>
                  </ListItem>
                  <ListItem  to="/contact" className="menu-item">
                      <FontAwesomeIcon icon={faEnvelope} style={{padding: "0 15px"}}/>
                      <span>Contact</span>
                  </ListItem>
            </Menu>
            )
        } else {
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
    }
}



export default LeftColumn
