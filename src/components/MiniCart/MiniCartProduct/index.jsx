import React from 'react'
import { Container } from './styles'
import ImageProduct from '../../../assets/product-img.png'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { FiTrash2 } from 'react-icons/fi'


export const MiniCartProduct = ({productImage, sellingPrice, productName}) => {
    const moneyFormatSeloingPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(sellingPrice)

  return (
    <Container>
        <img referrerPolicy="no-referrer" src={productImage} alt="" />

        <div>
            <h3>{productName}</h3>

            <div>
                <div className='dropdown-quantity'>
                    1 
                    <RiArrowDownSLine />
                </div>

                <div>
                    <p className='selling-price-minicart'>
                        {moneyFormatSeloingPrice}
                    </p>

                    <FiTrash2 />
                </div>
            </div>
        </div>
    </Container>
  )
}
