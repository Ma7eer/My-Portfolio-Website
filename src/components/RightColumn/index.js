import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTwitter, faMedium} from '@fortawesome/free-brands-svg-icons'

import Header from '../Header'
import SkillsCard from '../SkillsCard'
import ArticleList from '../ArticleList'
import { PageContainer, ContentContainer, ContentItem, IconContainer, TextLink } from './elements'

const ContactLink = ({goToLink, linkIcon, text}) => {
  return (
    <ContentContainer>
    <ContentItem>
    <IconContainer href={goToLink}>
      <FontAwesomeIcon style={{color: 'white', backgroundColor: 'green', padding: '15px', borderRadius: '50%'}} icon={linkIcon}/>
    </IconContainer>
    <TextLink href={goToLink}>{text}</TextLink>
    </ContentItem>
    </ContentContainer>
  )
}

const Contact = () => {
  return (
    <PageContainer>
      <Header text='Contact'/>
      <ContactLink goToLink='mailto:maher.alkendi2@gmail.com'  linkIcon={faEnvelope} text='maher.alkendi2@gmail.com'/>
      <ContactLink goToLink='https://github.com/Ma7eer'  linkIcon={faGithub} text='github.com/Ma7eer'/>
      <ContactLink goToLink='https://twitter.com/maheralkendi'  linkIcon={faTwitter} text='twitter.com/maheralkendi' />
      <ContactLink goToLink='https://medium.com/@maher.alkendi2'  linkIcon={faMedium} text='medium.com/@maher.alkendi2' />
    </PageContainer>
  )
}

const Skills = () => {
  return (
    <PageContainer>
      <Header text='Skills'/>
      <SkillsCard />
    </PageContainer>
  )
}

const Writing = () => {
  return (
    <PageContainer>
      <Header text='Writing'/>
      <ArticleList />
    </PageContainer>
  )
}

const Projects = () => {
  return (
    <PageContainer>
      <Header text='Projects' />
    </PageContainer>
  )
}

const About = () => {
  return (
    <PageContainer>
      <Header text='About'/>
    </PageContainer>
  )
}

const RightColumn = props => {
  if (props.page === 'contact') {
    return <Contact />
  } else if (props.page === 'skills') {
    return <Skills />
  } else if (props.page === 'writing') {
    return <Writing />
  } else if (props.page === 'projects') {
    return <Projects />
  } else {
    return <About />
  }
}

export default RightColumn
