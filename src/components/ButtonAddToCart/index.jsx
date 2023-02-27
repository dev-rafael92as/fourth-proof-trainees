import React from 'react'
import { Container } from './styles'

export const ButtonAddToCart = ({title, ...rest}) => {
  return (
    <Container {...rest}>
        {title}
    </Container>
  )
}
