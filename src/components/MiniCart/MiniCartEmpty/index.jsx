import React from 'react'
import { Container } from './styles'
import { TfiFaceSad } from 'react-icons/tfi'

export const MiniCartEmpty = () => {
  return (
    <Container>
        <TfiFaceSad />
        <p className='minicart-first-text'>Desculpe, você não tem produtos aqui</p>
        <p className='minicart-last-text'>Volte e explore para adicionar produtos no seu carrinho de compras.</p>
    </Container>
  )
}
