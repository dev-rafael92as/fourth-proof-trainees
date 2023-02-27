import React from 'react'
import { Container } from './styles'

export const ButtonRegionalization = ({icon: Icon, title, ...rest}) => {
  return (
    <Container {...rest}>
        {Icon && <Icon size={20} />}
        {title}
    </Container>
  )
}
