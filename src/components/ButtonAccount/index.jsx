import React, { useState } from 'react'
import { Container } from './styles'
import { RxPerson } from 'react-icons/rx'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

export const ButtonAccount = () => {
    const [ buttonPress, setBruttonPress ] = useState(false)

  return (
    <Container>
        <button
            onClick={() => setBruttonPress(!buttonPress)}    
        >
            <RxPerson />
            Minha conta
            {buttonPress ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </button>

    </Container>
  )
}
