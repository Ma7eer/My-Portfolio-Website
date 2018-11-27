import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faFreeCodeCamp, faMedium, faTwitter, faHackerrank } from '@fortawesome/free-brands-svg-icons'

import { Anchor, AnchorContainer } from './elements.js'

const SocialMediaLinks = props => {
  return (
    <AnchorContainer>
      <Anchor href="https://github.com/Ma7eer" Colors={props.Colors}>
        <FontAwesomeIcon icon={faGithub} />
      </Anchor>
      <Anchor href="https://codepen.io/Ma7eer" Colors={props.Colors}>
        <FontAwesomeIcon icon={faCodepen} />
      </Anchor>
      <Anchor href="https://www.freecodecamp.org/ma7eer" Colors={props.Colors}>
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </Anchor>
      <Anchor href="https://medium.com/@maher.alkendi2" Colors={props.Colors}>
        <FontAwesomeIcon icon={faMedium} />
      </Anchor>
      <Anchor href="https://twitter.com/maheralkendi" Colors={props.Colors}>
        <FontAwesomeIcon icon={faTwitter} />
      </Anchor>
      <Anchor href="https://www.hackerrank.com/maher_alkendi2" Colors={props.Colors}>
        <FontAwesomeIcon icon={faHackerrank} />
      </Anchor>
    </AnchorContainer>
  )
}

export default SocialMediaLinks