import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, show }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {show &&
        <Div>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Div>
      }
      {children}
    </>
  )
}