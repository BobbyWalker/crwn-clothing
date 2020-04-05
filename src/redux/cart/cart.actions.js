import {CART_ADD_ITEM, CART_REMOVE_ITEM, TOGGLE_CART_HIDDEN} from './cart.types'

export const addItemToCart = (item) => {
    return {
        type: CART_ADD_ITEM,
        payload: item
    }
}

export const toggleCart = () => {
    return {
        type: TOGGLE_CART_HIDDEN
    }
}

export const cartItemRemove = (item) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: item
    }
}
