import React from 'react'
import { Container } from './styles'
import { IoIosArrowDropdown } from 'react-icons/io'

export const DiscountTag = ({discount}) => {
  return (
    <Container>
        <IoIosArrowDropdown />
        {discount}%
    </Container>
  )
}
