import React from 'react'
import { Container } from './styles'
import { FiCreditCard } from 'react-icons/fi'
import { DiscountTag } from '../discountTag'
import { FreeShippingTag } from '../freeShippingTag'
import { ButtonAddToCart } from '../ButtonAddToCart'
import { useMutation } from '@apollo/client'
import { ADD_ITEM } from '../../graphql/mutation'
import { useRegionalization } from '../../hooks/regionalization'

export const Shelf = ({productName, productImage, productPrice, productListPrice, productInstallment, id, ...rest}) => {
    const { selectedState, setProductsCart, productsCart } = useRegionalization()

    const moneyFormatPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(productPrice)

    const moneyFormatListPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(productListPrice)

    const installmentsPrice = productPrice/productInstallment

    const moneyFormatinstallmentsPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(installmentsPrice)

    const calculateDiscount = ((((productListPrice / productPrice) * 100) - 100) * -1)

    const [AddToCart, { data, error }] = useMutation(ADD_ITEM);

  const handleAddToCart = (id) => {
    // Verifica se o produto já está no carrinho
    const productExists = productsCart.find(product => product.id === id);

    if (productExists) {
      alert('Este produto já está no carrinho!');
      return;
    }

    // Adiciona o produto ao carrinho
    AddToCart({ variables: { input: { id, state: selectedState } } });
    if (!data || error) return;

    const newProduct = data?.addItem;
    setProductsCart(prevState => ([...prevState, newProduct]));
    localStorage.setItem("atomic@b8one_cart", JSON.stringify(productsCart));
  };

  return (
    <Container {...rest}>
        <img  referrerPolicy="no-referrer" src={productImage} alt="" />

        <h3>
            {productName} 
        </h3>

        <p className='price'>
            {moneyFormatPrice}
        </p>
        <div className='sellingPrice'>
            {moneyFormatListPrice}
            {calculateDiscount > 0 && <DiscountTag discount={~~calculateDiscount} />}
        </div>
        <p className='payment-info'>
            à vista no pix ou cartão de crédito
        </p>

        <div className='wrapper-installment'>
            <FiCreditCard />
            <p>
                <span>{moneyFormatPrice}</span> em até <span>{productInstallment}x</span> de <span>{moneyFormatinstallmentsPrice}</span>
            </p>
        </div>

        <FreeShippingTag />

        <ButtonAddToCart title="Adicionar ao Carrinho" onClick={() => handleAddToCart(id)} />
    </Container>
  )
}
