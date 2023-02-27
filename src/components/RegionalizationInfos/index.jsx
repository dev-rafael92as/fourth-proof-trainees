import React, { useState } from 'react'
import { Container } from './styles'
import { TfiLocationPin } from 'react-icons/tfi'
import { HiOutlineClock, HiOutlinePhone } from 'react-icons/hi'
import { ButtonRegionalization } from '../ButtonRegionalization'
import { useRegionalization } from '../../hooks/regionalization'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'


export const RegionalizationInfos = () => {
    const { setModalIsOpen, dataInfosStore, setModalContent, modalIsOpen } = useRegionalization()
    const [ dropdownOpen, setDropdownOpen ] = useState(false)

    function openModal() {
        setModalContent("modal1")
        setModalIsOpen(true);
    }

    const storeName = dataInfosStore?.storeRegionalization.name
    const storeStreet = dataInfosStore?.storeRegionalization.address

    const parts = storeStreet.split(" ");
    const reversedParts = [parts[1], parts[0]];
    const reversedAddress = reversedParts.join(", ");

    const storeNeighborhood = dataInfosStore?.storeRegionalization.neighborhood
    const storeCity = dataInfosStore?.storeRegionalization.city
    const storeState = dataInfosStore?.storeRegionalization.state
    const storePostalCode = dataInfosStore?.storeRegionalization.postalCode
    const storeWorkDays = dataInfosStore?.storeRegionalization.hour
    const storePhone = dataInfosStore?.storeRegionalization.phone

  return (
    <Container>
        <div className='container-regionalizationInfos'>
            <div className='container-infos'>
                <div className='wrapper-firstInfos'>
                    <p className='store-name'>{storeName} |</p>
                    <p><TfiLocationPin/> <span className='street'>Rua {reversedAddress}</span>     <span className='neighborhood'>Bairro: {storeNeighborhood}</span>     <span className='city'>Cidade: {storeCity} - {storeState}</span>     <span className='postalCode'>CEP {storePostalCode}</span></p>
                </div>
                <div className='wrapper-lastInfos'>
                    <p><HiOutlineClock/> {storeWorkDays}</p>
                    <p><HiOutlinePhone /> {storePhone}</p>
                </div>
            </div>

            <ButtonRegionalization onClick={openModal} title="Trocar de Estado" icon={TfiLocationPin} />
        </div>

        <div className='container-regionalizationInfos-mobile'>
            <div>
                <div className='mobile-dropdown' onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <p className='store-name'>{storeName}</p>
                    { dropdownOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </div>

                <div className={dropdownOpen ? "dropdown-open" : "dropdown-close"}>
                    <div className="wrapper-firstInfos">
                        <TfiLocationPin/> 
                        <p>
                            <span className='street'>Endereço {reversedAddress}</span>     
                            <span className='neighborhood'>Bairro: {storeNeighborhood}</span>     <span className='city'>Cidade: {storeCity} - {storeState}</span>     <span className='postalCode'>CEP {storePostalCode}</span>
                        </p>
                    </div>
                    <div className='wrapper-lastInfos'>
                        <p><HiOutlineClock/> {storeWorkDays}</p>
                        <p><HiOutlinePhone /> {storePhone}</p>
                    </div>
                </div>
            </div>
            <ButtonRegionalization onClick={openModal} title="Trocar de Estado" icon={TfiLocationPin} />
        </div>
    </Container>
  )
}