import React from 'react'
import { Container } from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRegionalization } from '../../hooks/regionalization'
import { MiniCartEmpty } from './MiniCartEmpty'
import { MiniCartNotEmpty } from './MiniCartNotEmpty'
import { MiniCartFooter } from './MiniCartFooter'


export const MiniCart = () => {
    const { productsCart, setMiniCartIsOpen, miniCartIsOpen } = useRegionalization()
    
    return (
    <Container>
        
        <div className='header-miniCart'>
            Minhas compras
            <button onClick={() => setMiniCartIsOpen(!miniCartIsOpen)}>
                <AiOutlineCloseCircle />
            </button>
        </div>

        <div className='main-content-minicart'>
            {productsCart.length ? <MiniCartNotEmpty /> : <MiniCartEmpty />}
        </div>

    </Container>
  )
}
