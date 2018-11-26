import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faFreeCodeCamp, faMedium, faTwitter, faHackerrank } from '@fortawesome/free-brands-svg-icons'

import { Anchor, AnchorContainer } from './elements.js'

const SocialMediaLinks = props => {
  return (
    <AnchorContainer>
      <Anchor href="https://github.com/Ma7eer">
        <FontAwesomeIcon icon={faGithub} />
      </Anchor>
      <Anchor href="https://codepen.io/Ma7eer">
        <FontAwesomeIcon icon={faCodepen} />
      </Anchor>
      <Anchor href="https://www.freecodecamp.org/ma7eer">
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </Anchor>
      <Anchor href="https://medium.com/@maher.alkendi2">
        <FontAwesomeIcon icon={faMedium} />
      </Anchor>
      <Anchor href="https://twitter.com/maheralkendi">
        <FontAwesomeIcon icon={faTwitter} />
      </Anchor>
      <Anchor href="https://www.hackerrank.com/maher_alkendi2">
        <FontAwesomeIcon icon={faHackerrank} />
      </Anchor>
    </AnchorContainer>
  )
}

export default SocialMediaLinks