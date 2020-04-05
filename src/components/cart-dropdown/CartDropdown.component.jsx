import React from 'react'
import {useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './CartDropdown.style.scss'

const CartDropdown = ({history}) => {
    const pCartItems = useSelector(selectCartItems)

    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'}>
                {pCartItems.length ?
                    pCartItems.map(c => <CartItem key={c.id} item={c}/>)
                    :
                    <span className={'empty-message'}>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


export default withRouter(CartDropdown)
