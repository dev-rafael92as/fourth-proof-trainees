import {gql} from '@apollo/client'

export const ADD_ITEM = gql`
    mutation addItem($input: AddItemInput!){
        addItem(input: $input) {
            id
            image
            name
            listPrice
            price
            installments
        }
    }
`