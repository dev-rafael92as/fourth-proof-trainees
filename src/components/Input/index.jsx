import React from 'react'
import { Container } from './styles'

export const Input = ({icon: Icon, placeholder, type, ...rest}) => {
  return (
    <Container>
        <input {...rest} placeholder={placeholder} type={type} />
        {Icon && <Icon size={24} />}
    </Container>
  )
}
