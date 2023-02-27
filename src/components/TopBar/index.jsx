import React, { useState } from 'react'
import { Container } from './styles'
import { AiOutlineStar } from 'react-icons/ai'
import { CgCloseO } from 'react-icons/cg'
import { useRegionalization } from '../../hooks/regionalization'

export const TopBar = () => {
  const { setIsOpenTopBar } = useRegionalization()

  const handleCloseTopBar = () => {
    setIsOpenTopBar(false)
    localStorage.setItem('topbar@b8one', 'true')
  }

  return (
    <Container>
        <div>
            <AiOutlineStar />
            Insira aqui o texto ou informação relevante que deseja comunicar
        </div>

        <button onClick={() => handleCloseTopBar()}><CgCloseO /></button>
    </Container>
  )
}
