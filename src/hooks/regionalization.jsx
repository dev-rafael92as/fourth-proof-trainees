import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { REGIONALIZATION } from "../graphql/regionalization";

const RegionalizationContext = createContext({});

function RegionalizationProvider({ children }) {
    // const [ data, setData ] = useState({});
    // const [ moviePreviewPage, setMoviePreviewPage ] = useState();
    // const [ search, setSearch ] = useState("")

    const [ selectedState, setSelectedState] = useState("SP");
    const [ dataInfosStore, setDataInfosStore ] = useState()
    const [ modalIsOpen, setModalIsOpen ] = useState(true);
    const [ modalContent, setModalContent ] = useState("modal1")
    const [ isOpenTopBar, setIsOpenTopBar ] = useState(true)
    const [ noRegionalization, setNoRegionalization ] = useState(true)
    const [ productsCart, setProductsCart ] = useState([])
    const [ miniCartIsOpen, setMiniCartIsOpen ] = useState(false)


    // if (dataInfosStore) {
    //     const storeName = dataInfosStore.storeRegionalization.name
    //     const storeStreet = dataInfosStore.storeRegionalization.address
    //     const storeNeighborhood = dataInfosStore.storeRegionalization.neighborhood
    //     const storeCity = dataInfosStore.storeRegionalization.city
    //     const storeState = dataInfosStore.storeRegionalization.state
    //     const storePostalCode = dataInfosStore.storeRegionalization.postalCode
    //     const storeWorkDays = dataInfosStore.storeRegionalization.hour
    //     const storePhone = dataInfosStore.storeRegionalization.phone
    // }

    // const email = 'rafael.almeida@b8one.com'
    // useEffect(() => {
    //     const { loading, error, data } = useQuery(REGIONALIZATION, {
    //         variables: {
    //             input: {
    //                 email: email,
    //                 state: selectedState,
    //             },
    //         },
    //     });
        
    //     if (loading) return <p>Carregando...</p>;
    //     if (error) return <p>Erro :(</p>;
        
    //     setDataInfosStore(data)
    // },[selectedState])


    return(
        <RegionalizationContext.Provider
            value={{
                selectedState,
                setSelectedState,
                dataInfosStore,
                setDataInfosStore,
                modalIsOpen, 
                setModalIsOpen,
                modalContent,
                setModalContent,
                isOpenTopBar,
                setIsOpenTopBar,
                noRegionalization,
                setNoRegionalization,
                productsCart,
                setProductsCart,
                miniCartIsOpen,
                setMiniCartIsOpen
                // storeNeighborhood,
                // storeCity,
                // storeState,
                // storePostalCode,
                // storeWorkDays,
                // storePhone
            }}
        >
            {children}
        </RegionalizationContext.Provider>
    )
}

const useRegionalization = ( ) => {
    const context = useContext(RegionalizationContext)

    return context;
}

export { RegionalizationProvider, useRegionalization } 