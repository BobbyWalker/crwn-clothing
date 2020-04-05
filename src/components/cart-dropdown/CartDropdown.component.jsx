import React from 'react'

import './CartDropdown.style.scss'
import CustomButton from '../custom-button/CustomButton.component'
import {useSelector} from 'react-redux'
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropdown = () => {
    const pCartItems = useSelector(selectCartItems)

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
