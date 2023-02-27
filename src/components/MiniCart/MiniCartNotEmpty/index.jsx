import React from 'react'
import { useRegionalization } from '../../../hooks/regionalization'
import { MiniCartFooter } from '../MiniCartFooter'
import { MiniCartProduct } from '../MiniCartProduct'
import { Container } from './styles'

export const MiniCartNotEmpty = () => {
  const { productsCart } = useRegionalization()

  return (
    <Container>
        {productsCart.map((minicartProduct) => (
          <MiniCartProduct productImage={minicartProduct.image} key={minicartProduct.id} sellingPrice={minicartProduct.listPrice} productName={minicartProduct.name}/>
        ))}

        <div className='wrapper-footer-minicart'>
            <MiniCartFooter />
        </div>
    </Container>
  )
}
