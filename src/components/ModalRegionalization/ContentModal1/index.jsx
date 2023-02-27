import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { REGIONALIZATION } from '../../../graphql/regionalization';
import { useRegionalization } from '../../../hooks/regionalization';
import { Container } from './styles'

export const ContentModal1 = () => {
    const { setModalContent, setSelectedState, dataInfosStore, setNoRegionalization, setDataInfosStore} = useRegionalization()
    
    const handleChangeModal = (e) => {
        localStorage.setItem("atomic@b8one", e.target.id)
        localStorage.setItem('data@b8one', JSON.stringify(dataInfosStore));
        setSelectedState(e.target.id)
        setModalContent("modal2")
        setNoRegionalization(false)
    }

  return (
    <Container>
        <h3 className='title-modal1'>Olá Trainee 😃, selecione seu Estado:</h3>

        <div className='desktop-modal'>
            <div className='first-colum'>
                <button onClick={(e) => handleChangeModal(e)} id='AC'>Acre</button>
                <button onClick={(e) => handleChangeModal(e)} id='AL'>Alagoas</button>
                <button onClick={(e) => handleChangeModal(e)} id='AM'>Amazonas</button>
                <button onClick={(e) => handleChangeModal(e)} id='BA'>Bahia</button>
                <button onClick={(e) => handleChangeModal(e)} id='CE'>Ceará</button>
                <button onClick={(e) => handleChangeModal(e)} id='DF'>Distrito Federal</button>
                <button onClick={(e) => handleChangeModal(e)} id='ES'>Espirito Santo</button>
                <button onClick={(e) => handleChangeModal(e)} id='GO'>Goiás</button>
                <button onClick={(e) => handleChangeModal(e)} id='MA'>Maranhão</button>
            </div>

            <div className='second-colum'>
                <button onClick={(e) => handleChangeModal(e)} id='MT'>Mato Grosso</button>
                <button onClick={(e) => handleChangeModal(e)} id='MS'>Mato Grosso do Sul</button>
                <button onClick={(e) => handleChangeModal(e)} id='MG'>Minas Gerias</button>
                <button onClick={(e) => handleChangeModal(e)} id='PA'>Pará</button>
                <button onClick={(e) => handleChangeModal(e)} id='PB'>Paraíba</button>
                <button onClick={(e) => handleChangeModal(e)} id='PR'>Paraná</button>
                <button onClick={(e) => handleChangeModal(e)} id='PE'>Pernambuco</button>
                <button onClick={(e) => handleChangeModal(e)} id='PI'>Piauí</button>
                <button onClick={(e) => handleChangeModal(e)} id='RJ'>Rio de Janeiro</button>
            </div>

            <div className='third-colum'>
                <button onClick={(e) => handleChangeModal(e)} id="RN">Rio Grande do Norte</button>
                <button onClick={(e) => handleChangeModal(e)} id='RS'>Rio Grande do Sul</button>
                <button onClick={(e) => handleChangeModal(e)} id='RO'>Rondônia</button>
                <button onClick={(e) => handleChangeModal(e)} id='RR'>Roraima</button>
                <button onClick={(e) => handleChangeModal(e)} id='SC'>Santa Catarina</button>
                <button onClick={(e) => handleChangeModal(e)} id='SP'>São Paulo</button>
                <button onClick={(e) => handleChangeModal(e)} id='SE'>Sergipe</button>
                <button onClick={(e) => handleChangeModal(e)} id='TO'>Tocantins</button>
            </div>
        </div>
        <div className='mobile-modal'>
            <button onClick={(e) => handleChangeModal(e)} id='AC'>Acre</button>
            <button onClick={(e) => handleChangeModal(e)} id='AL'>Alagoas</button>
            <button onClick={(e) => handleChangeModal(e)} id='AM'>Amazonas</button>
            <button onClick={(e) => handleChangeModal(e)} id='BA'>Bahia</button>
            <button onClick={(e) => handleChangeModal(e)} id='CE'>Ceará</button>
            <button onClick={(e) => handleChangeModal(e)} id='DF'>Distrito Federal</button>
            <button onClick={(e) => handleChangeModal(e)} id='ES'>Espirito Santo</button>
            <button onClick={(e) => handleChangeModal(e)} id='GO'>Goiás</button>
            <button onClick={(e) => handleChangeModal(e)} id='MA'>Maranhão</button>

            <button onClick={(e) => handleChangeModal(e)} id='MT'>Mato Grosso</button>
            <button onClick={(e) => handleChangeModal(e)} id='MS'>Mato Grosso do Sul</button>
            <button onClick={(e) => handleChangeModal(e)} id='MG'>Minas Gerias</button>
            <button onClick={(e) => handleChangeModal(e)} id='PA'>Pará</button>
            <button onClick={(e) => handleChangeModal(e)} id='PB'>Paraíba</button>
            <button onClick={(e) => handleChangeModal(e)} id='PR'>Paraná</button>
            <button onClick={(e) => handleChangeModal(e)} id='PE'>Pernambuco</button>
            <button onClick={(e) => handleChangeModal(e)} id='PI'>Piauí</button>
            <button onClick={(e) => handleChangeModal(e)} id='RJ'>Rio de Janeiro</button>

            <button onClick={(e) => handleChangeModal(e)} id="RN">Rio Grande do Norte</button>
            <button onClick={(e) => handleChangeModal(e)} id='RS'>Rio Grande do Sul</button>
            <button onClick={(e) => handleChangeModal(e)} id='RO'>Rondônia</button>
            <button onClick={(e) => handleChangeModal(e)} id='RR'>Roraima</button>
            <button onClick={(e) => handleChangeModal(e)} id='SC'>Santa Catarina</button>
            <button onClick={(e) => handleChangeModal(e)} id='SP'>São Paulo</button>
            <button onClick={(e) => handleChangeModal(e)} id='SE'>Sergipe</button>
            <button onClick={(e) => handleChangeModal(e)} id='TO'>Tocantins</button>
        </div>
    </Container>
  )
}
