import React from 'react'
import { Container } from './styles'
import { TfiLocationPin } from 'react-icons/tfi'
import { HiOutlineClock, HiOutlinePhone } from 'react-icons/hi'
import { Button } from '../../Button'
import { BiCheck } from 'react-icons/bi'
import { useRegionalization } from '../../../hooks/regionalization'

export const ContentModal2 = () => {
    const { setModalContent, dataInfosStore, setModalIsOpen } = useRegionalization()

    const storeName = dataInfosStore?.storeRegionalization.name
    const storeStreet = dataInfosStore?.storeRegionalization.address
    const storeNeighborhood = dataInfosStore?.storeRegionalization.neighborhood
    const storeCity = dataInfosStore?.storeRegionalization.city
    const storeState = dataInfosStore?.storeRegionalization.state
    const storePostalCode = dataInfosStore?.storeRegionalization.postalCode
    const storeWorkDays = dataInfosStore?.storeRegionalization.hour
    const storePhone = dataInfosStore?.storeRegionalization.phone

  return (
    <Container>
        <h3 className='title-modal2'>Confira as informações da loja do seu Estado e prossiga:</h3>

        <div>
            <p className='store-selected'>{storeName}</p>

            <div className='store-localization'>
                <TfiLocationPin />
                <p>
                    <span className='modal-street'>Endereço: {storeStreet}</span>
                    <span className='modal-neigborhood'>Bairro: {storeNeighborhood}</span>
                    <span className='modal-city'>Cidade: {storeCity} - {storeState}</span>
                    <span className='modal-postalCode'>CEP {storePostalCode}</span>
                </p>
            </div>

            <div className='store-schedules'>
                <HiOutlineClock />
                <p>
                    <span className='modal-days'>
                        {storeWorkDays}
                    </span>
                </p>
            </div>

            <div className='store-contacts'>
                <HiOutlinePhone />
                <p>
                    <span className='modal-contact1'>{storePhone}</span>
                </p>
            </div>
        </div>

        <div className='wrapper-buttons'>
            <Button title="Voltar" onClick={() => setModalContent("modal1")} style={{background: 'rgba(0, 0, 0, 0.1', color: 'rgba(0, 0, 0, 0.5)'}}/>
            <Button title="Prosseguir" onClick={() => setModalIsOpen(false)} icon={BiCheck} />
        </div>
    </Container>
  )
}
