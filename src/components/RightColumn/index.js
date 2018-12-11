import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import '../../../node_modules/imagehover.css/css/imagehover.css'

import Header from '../Header'
import SkillsCard from '../SkillsCard'
import ArticleList from '../ArticleList'
import { PageContainer, ContentContainer, ContentItem, IconContainer, TextLink, Button } from './elements'
import tempImage from '../../images/profile.jpg'
import ProjectOneImg from '../../images/guessTheFlag.png'

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

const Projects = () => { // make images smaller as screen gets smaller then start wraping
  return (
    <PageContainer>
      <Header text='Projects' />
      <div className='project-grid' style={{padding: '2rem 0 4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <figure className='imghvr-push-left' style={{margin: '12px', border: '1px solid black'}}>
      <img src={ProjectOneImg} alt='' height='245' width="360" />
      <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A "Guess the flag" game built using React js. Fully responsive for mobile devices.
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      <figure className='imghvr-push-left' style={{margin: '12px'}}>
      <img src={tempImage} alt='' height='245' width="360" />
            <figcaption style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        A node application that performs a simple email and password authentication using passport js
        <div style={{marginTop: '30%'}}>
        <div style={{display: 'flex'}}>
        <form method='GET' action='https://awesome-turing-811668.netlify.com/'>
          <Button type="submit" >Visit Site</Button>
        </form>
        <form method='GET' action='https://github.com/Ma7eer/Guess-the-flag'>
          <Button type="submit" >View Code</Button>
        </form>
        </div>
        </div>
      </figcaption>
      </figure>
      </div>
    </PageContainer>
  )
}

const About = () => {
  return (
    <PageContainer>
      <Header text='About'/>
      <h1>A passionate Web Developer working on Getting better everyday</h1>
      <p>lorem vfdsn aflkgjnbv fdvjf bvfdslkbv gfdskb gfdb gkb ks lorem vfdsn aflkgjnbv fdvjf bvfdslkbv gfdskb gfdb gkb ks lorem vfdsn aflkgjnbv fdvjf bvfdslkbv gfdskb gfdb gkb ks</p>
      <p>Current Focus: Building my Website</p>
    </PageContainer>
  )
}
const Index = () => {
  return (
    <PageContainer>
      <h1 style={{fontSize: '70px', marginLeft: '5%', marginBottom: '0'}}>Maher Alkendi</h1>
      <p style={{fontSize: '25px', marginLeft: '5%'}}>Full-stack Web Developer</p>
      <FontAwesomeIcon style={{fontSize: '40px', marginLeft: '5%'}} icon={faGithub} />
      <FontAwesomeIcon style={{fontSize: '40px', marginLeft: '2%'}} icon={faTwitter} />
      <FontAwesomeIcon style={{fontSize: '40px', marginLeft: '2%'}} icon={faMedium} />
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
  } else if (props.page === 'about') {
    return <About />
  } else {
    return <Index />
  }
}

export default RightColumn
