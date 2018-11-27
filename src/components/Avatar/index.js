import React, { Fragment } from 'react'

import { Image } from './elements'
import profileImage from '../../images/profile.jpg'

const Avatar = props => {
  return (
    <Fragment>
      <Image src={profileImage} alt="Maher Avatar" Colors={props.Colors} />
    </Fragment>
  )
}

export default Avatar
