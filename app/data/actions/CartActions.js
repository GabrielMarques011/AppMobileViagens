export const CART_PRODUCTS_ADD = 'CART_PRODUCTS_ADD'
export const CART_PRODUCTS_REMOVE = 'CART_PRODUCTS_REMOVE'
export const CART_PRODUCTS_CLEAN = 'CART_PRODUCTS_CLEAN'
export const CART_PRODUCTS_FINISH = 'CART_PRODUCTS_FINISH'

export const productAdiciona = (value) => ({

    type: CART_PRODUCTS_ADD,
    value

})

export const productRemove = (value) => ({

    type: CART_PRODUCTS_REMOVE,
    value

})

export const productLimpar = (value) => ({

    type: CART_PRODUCTS_CLEAN,
    value

})

export const productFinalizar = () => ({

    type: CART_PRODUCTS_FINISH,

})