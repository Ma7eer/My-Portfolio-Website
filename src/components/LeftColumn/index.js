import React from "react"

import Navbar from '../ColumnNavbar'
import { Column, InnerColumn, Avatar, ImageContainer, Image, ContentContainer, MyName, MyTitle } from './elements'
import avatar from '../../images/profile.jpg'

const LeftColumn = props => {
    return (
      <>
      <Column>
        <InnerColumn>
          <Avatar to='/'>
          <ImageContainer>
          <Image src={avatar} alt="" />
          </ImageContainer>
          <ContentContainer>
          <MyName>MAHER ALKENDI</MyName>
          <MyTitle>FULL-STACK WEB DEVELOPER</MyTitle>
          </ContentContainer>
          </Avatar>
          <hr />
          <Navbar />
          </InnerColumn>
        </Column>
      </>
    )
}

export default LeftColumn
