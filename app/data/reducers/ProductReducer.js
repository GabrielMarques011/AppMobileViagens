import {PRODUCTS_RESPONSE, PRODUCTS_SELECT} from "../actions/ProductAction"

export const initialState = {

    productList:[],
    selectedProduct: null

}

export const ProductReducer = (store = initialState, action) =>{

    switch (action.type) {
        case PRODUCTS_RESPONSE:
            
            return {...store, productList: action.value}
        
        case PRODUCTS_SELECT:

            return {...store, selectedProduct: action.value}

    }

}