import {addItemToCart, deleteItemFromCart, removeItemFromCart} from './cart.utils'
import cartTypes from './cart.types'

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartTypes.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartTypes.CART_DELETE_ITEM:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        case cartTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.CLEAR_CART:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default cartReducer
