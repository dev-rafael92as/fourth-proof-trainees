import React from 'react'
import { useRegionalization } from '../../../hooks/regionalization'
import { ButtonAddToCart } from '../../ButtonAddToCart'
import { Container } from './styles'

export const MiniCartFooter = () => {
    const { productsCart, setMiniCartIsOpen, miniCartIsOpen, setProductsCart } = useRegionalization()

    const newArrayTotal = productsCart.map((listPriceProduct) => (
      Number(listPriceProduct.listPrice)
    ))

    var subtotalCalculate = newArrayTotal.reduce(function(soma, i) {
      return soma + i;
    });

    const subTotalFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(subtotalCalculate)

  const handleCheckout = () => {
    setMiniCartIsOpen(!miniCartIsOpen)
    setProductsCart([])

    alert("Parabéns vc comprou :)")
  }

  return (
    <Container>
        <div>
            <p>Subtotal</p>
            <p className='totalValueCart'>{subTotalFormat}</p>
        </div>

        <p>Frete e impostos calculados no checkout.</p>

        <ButtonAddToCart onClick={() => handleCheckout()} title="Finalizar compra"/>
    </Container>
  )
}
