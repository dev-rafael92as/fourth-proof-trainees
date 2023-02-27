import { gql } from "@apollo/client";

export const REGIONALIZATION = gql`
    query StoreRegionalization($input: SendRegionalizationInput!){
        storeRegionalization(input:$input) {
            name
            address
            neighborhood
            city
            state
            postalCode
            hour
            celphone
            phone
            products {
                id
                image
                name
                listPrice
                price
                installments
            }
        }
    }
`