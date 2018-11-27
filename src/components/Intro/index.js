import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import { Paragraph } from './elements'

const Intro = props => {
  return (
    <Fragment>
      <Paragraph>
        Hi! My name is Maher Alkendi and I am a Web Developer from Muscat, Oman. I spend most of my time either building projects, learning about new technologies, or writing about my experiences in tech. You can Check <Link to="/now/" style={{color: props.Colors.secondary}}>here</Link> to see what I am working on currently!
      </Paragraph>
    </Fragment>
  )
}

export default Intro