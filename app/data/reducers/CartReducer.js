import {CART_PRODUCTS_ADD, CART_PRODUCTS_REMOVE, CART_PRODUCTS_CLEAN} from "../actions/CartActions"

export const initialState = {
    product:[],
}

export const CartProducers = (store = initialState, action) =>{

    switch (action.type) {

        case CART_PRODUCTS_ADD:

            return {...store, product: [...store.product, action.value]}

        case CART_PRODUCTS_CLEAN:

             return {...store, product: []}

        case CART_PRODUCTS_REMOVE:

            return{

                ...store, product: store.product.filter(item => item !== action.value)

            }

        default: return store
    }

}