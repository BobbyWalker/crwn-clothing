import React from 'react'

import './CartDropdown.style.scss'
import CustomButton from '../custom-button/CustomButton.component'

const CartDropdown = () => (
    <div className={'cart-dropdown'}>
        <div className={'cart-items'}>
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


export default CartDropdown