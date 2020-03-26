import React from 'react'
import { Div } from './styles'
import { Logotipo } from './Icon'

import { MdCameraAlt, MdMessage } from 'react-icons/md'

export const Logo = (props) => {
  return (
    <Div>
      <MdCameraAlt size='32px' />
      <Logotipo />
      <MdMessage size='32px' />
    </Div>
  )
}
