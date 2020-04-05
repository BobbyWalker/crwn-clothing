import React from 'react'

import './CartDropdown.style.scss'
import CustomButton from '../custom-button/CustomButton.component'
import {useSelector} from 'react-redux'
import CartItem from '../cart-item/CartItem.component'

const CartDropdown = () => {
    const pCartItems = useSelector(state => state.cart.cartItems)

    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'}>
                {pCartItems.map(c => <CartItem key={c.id} item={c}/>)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


export default CartDropdown
