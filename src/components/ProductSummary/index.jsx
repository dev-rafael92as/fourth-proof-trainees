import React from 'react'
import { useRegionalization } from '../../hooks/regionalization'
import { Shelf } from '../Shelf'
import { Container } from './styles'

export const ProductSummay = () => {
  const { dataInfosStore } = useRegionalization()

  const productsStore = dataInfosStore?.storeRegionalization.products
  
  return (
    <Container>
      { dataInfosStore && 
        <>
          {productsStore.map((product) => (
            <Shelf key={product.id} id={product.id} productName={product.name} productImage={product.image} productPrice={product.price} productListPrice={product.listPrice} productInstallment={product.installments}/>
          ))}
        </>
      }
    </Container>
  )
}
