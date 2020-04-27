import cartTypes from './cart.types'

export const addItemToCart = (item) => {
    return {
        type: cartTypes.CART_ADD_ITEM,
        payload: item
    }
}

export const toggleCart = () => {
    return {
        type: cartTypes.TOGGLE_CART_HIDDEN
    }
}

export const cartItemDelete = (item) => {
    return {
        type: cartTypes.CART_DELETE_ITEM,
        payload: item
    }
}

export const cartItemRemove = (item) => {
    return {
        type: cartTypes.CART_REMOVE_ITEM,
        payload: item
    }
}

export const cartClear = () => ({
    type: cartTypes.CLEAR_CART
})
