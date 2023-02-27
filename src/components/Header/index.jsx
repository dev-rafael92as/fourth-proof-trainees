import React from 'react'
import { Container } from './styles'
import imageLogo from '../../assets/logo-app.png'
import { Input } from '../Input'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { ButtonAccount } from '../ButtonAccount'
import { useRegionalization } from '../../hooks/regionalization'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Header = () => {
    const { productsCart, setMiniCartIsOpen, miniCartIsOpen } = useRegionalization()
    console.log(miniCartIsOpen)
  return (
    <Container>
        <div className='container-header'>
            <div className='wrapper-logo'>
                <a href="#">
                    <img src={imageLogo} alt="Logo Aplicação" />
                </a>
            </div>

            <div className='wrapper-searchInput'>
                <Input placeholder="O que você procura?" icon={FiSearch} type="Text" />
            </div>

            <div className='wrapper-accountButton'>
                <ButtonAccount />
            </div>

            <button className='wrapper-minicart' onClick={() => setMiniCartIsOpen(!miniCartIsOpen)}>
                <p className='icon-cart'>{productsCart.length}</p>
                <FiShoppingCart />
            </button>
        </div>
        <div className='container-header-mobile'>
            <RxHamburgerMenu />
            <div className='wrapper-logo'>
                <a href="#">
                    <img src={imageLogo} alt="Logo Aplicação" />
                </a>
            </div>

            <div className='wrapper-searchInput'>
                <FiSearch />
                {/* <Input placeholder="O que você procura?" icon={FiSearch} type="Text" /> */}
            </div>

            <div className='wrapper-accountButton'>
                <ButtonAccount />
            </div>

            <button className='wrapper-minicart' onClick={() => setMiniCartIsOpen(!miniCartIsOpen)}>
                <p className='icon-cart'>{productsCart.length}</p>
                <FiShoppingCart />
            </button>
        </div>
    </Container>
  )
}
