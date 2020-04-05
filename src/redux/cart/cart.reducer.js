import {CART_ADD_ITEM, CART_REMOVE_ITEM, TOGGLE_CART_HIDDEN} from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utils'

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CART_REMOVE_ITEM:
            console.log(state)
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer
