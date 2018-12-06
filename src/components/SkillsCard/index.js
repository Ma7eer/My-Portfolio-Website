import React from 'react'

import { CardContainer, Card, CardContent, CardHeader, Row, ImageContainer, Image } from './elements'
import HTML5 from '../../images/html5.png'
import JSX from '../../images/react.png'
import EJS from '../../images/templateLang.png'
import CSS3 from '../../images/css3.png'
import Bootstrap from '../../images/bootstrap.png'
import Materialize from '../../images/materialize.png'
import Bulma from '../../images/bulma.svg'
import Javascript from '../../images/javascript.png'
import JQuery from '../../images/jquery.png'
import NodeJs from '../../images/nodejs.png'
import DotNet from '../../images/DotNet.png'
import CSharp from '../../images/csharp.jpg'
import MongoDB from '../../images/mongodb.png'
import PostgreSQL from '../../images/postgresql.png'
import Webpack from '../../images/webpack.png'
import Github from '../../images/github.png'
import Heroku from '../../images/heroku.png'
import Netlify from '../../images/netlify.jpg'

// const data = [
//   {
//   'HTML': [
//     {
//       imgSrc: HTML5,
//       subTitle: 'HTML'
//     },
//     {}
//   ]
// }
// ]
// const titles = ["HTML", "CSS", "JavaScript", "Back-End", "Build Tools", "Other"]

const CardComp = props => {
  return (
    <>
    <Card>
    <CardContent>
    <CardHeader>HTML</CardHeader>
      <Row>
        <ImageContainer>
          <Image src={HTML5} alt=""/> HTML
        </ImageContainer>
        <ImageContainer>
          <Image src={JSX} alt=""/> JSX
        </ImageContainer>
        <ImageContainer>
          <Image src={EJS} alt=""/> EJS
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>

        <Card>
    <CardContent>
    <CardHeader>CSS</CardHeader>
      <Row>
        <ImageContainer>
          <Image src={CSS3} alt=""/> CSS3
        </ImageContainer>
        <ImageContainer>
          <Image src={Bootstrap} alt=""/> JSX
        </ImageContainer>
        <ImageContainer>
          <Image src={Materialize} alt=""/> Materialize
        </ImageContainer>
        <ImageContainer>
          <Image src={Bulma} alt=""/> Bulma
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>

            <Card>
    <CardContent>
    <CardHeader>Front-End</CardHeader>
      <Row>
        <ImageContainer>
          <Image src={Javascript} alt=""/> ES6+
        </ImageContainer>
        <ImageContainer>
          <Image src={JSX} alt=""/> React
        </ImageContainer>
        <ImageContainer>
          <Image src={JQuery} alt=""/> jQuery
        </ImageContainer>
        <ImageContainer>
          <Image src={NodeJs} alt=""/> Node
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>

            <Card>
    <CardContent>
    <CardHeader>Back-End</CardHeader>
      <Row>
      <ImageContainer>
          <Image src={CSharp} alt=""/> C#
        </ImageContainer>
        <ImageContainer>
          <Image src={DotNet} alt=""/> .Net Core
        </ImageContainer>
        <ImageContainer>
          <Image src={PostgreSQL} alt=""/> PostgreSQL
        </ImageContainer>
        <ImageContainer>
          <Image src={MongoDB} alt=""/> Mongodb
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>

    <Card>
    <CardContent>
    <CardHeader>Build Tools</CardHeader>
      <Row>
      <ImageContainer>
          <Image src={Webpack} alt=""/> Webpack
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>

                <Card>
    <CardContent>
    <CardHeader>Others</CardHeader>
      <Row>
      <ImageContainer>
          <Image src={Github} alt=""/> Github
        </ImageContainer>
        <ImageContainer>
          <Image src={Heroku} alt=""/> Heroku
        </ImageContainer>
        <ImageContainer>
          <Image src={Netlify} alt=""/> Netlify
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>

    </>
  )
}

const SkillsCard = props => {
  return (
    <CardContainer>
      <CardComp />
    </CardContainer>
  )
}

export default SkillsCard