import React from 'react'

import { CardContainer, Card, CardContent, CardHeader, Row, ImageContainer, Image } from './elements'
import images1 from '../../images/html5.png'

const titles = ["HTML", "CSS", "JavaScript", "Back-End", "Build Tools", "Other"]

const CardComp = props => {
  return (
    <Card>
    <CardContent>
    <CardHeader>{props.title}</CardHeader>
      <Row>
        <ImageContainer>
          <Image src={images1} alt=""/> HTML
        </ImageContainer>
        <ImageContainer>
          <Image src={images1} alt=""/> HTML
        </ImageContainer>
        </Row>
    </CardContent>
    </Card>
  )
}

const SkillsCard = props => {
  return (
    <CardContainer>
      {titles.map(title => <CardComp title={title} />)}
    </CardContainer>
  )
}

export default SkillsCard