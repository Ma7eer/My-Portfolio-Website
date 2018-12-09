import React from "react"

import Navbar from '../ColumnNavbar'
import { Column, InnerColumn, Avatar, ImageContainer, Image, ContentContainer, MyName, MyTitle, HorizontalLine, Top, Burger } from './elements'
import avatar from '../../images/profile.jpg'

const LeftColumn = props => {
    return (
      <>
      <Column>
        <InnerColumn>
          <Burger />
          <Avatar to='/'>
          <ImageContainer>
          <Image src={avatar} alt="" />
          </ImageContainer>
          <ContentContainer>
          <MyName>MAHER ALKENDI</MyName>
          <MyTitle>FULL-STACK WEB DEVELOPER</MyTitle>
          </ContentContainer>
          </Avatar>
          <HorizontalLine />
          <Navbar />
          </InnerColumn>
        </Column>
        <Top />
      </>
    )
}

export default LeftColumn
