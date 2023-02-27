import React from 'react'
import { Header } from '../../components/Header'
import { MiniCart } from '../../components/MiniCart'
import { ModalRegionalization } from '../../components/ModalRegionalization'
import { ProductSummay } from '../../components/ProductSummary'
import { RegionalizationInfos } from '../../components/RegionalizationInfos'
import { TopBar } from '../../components/TopBar'
import { useRegionalization } from '../../hooks/regionalization'
import { Container } from './styles'

export const Home = () => {
  const { dataInfosStore, isOpenTopBar, noRegionalization, miniCartIsOpen, setMiniCartIsOpen } = useRegionalization()
  const storeName = dataInfosStore?.storeRegionalization.name.replace(" de", "")


  return (
    <Container>
        {localStorage.getItem('topbar@b8one') && <TopBar />}

        <Header />

        { !noRegionalization ? <RegionalizationInfos /> : <></>}

        <main>
        { !noRegionalization ? <h2>Seleção de produtos {storeName}</h2> : <h2>Ofertas especiais pra você não perder nada!</h2>}
          

          <ProductSummay />
        </main>

        <ModalRegionalization />

        {miniCartIsOpen ? <MiniCart /> : ""}
        {miniCartIsOpen ? <div onClick={() => setMiniCartIsOpen(!miniCartIsOpen)} className='overlay'></div> : ""}
    </Container>
  )
}
