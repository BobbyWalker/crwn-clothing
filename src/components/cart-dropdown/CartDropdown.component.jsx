import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './CartDropdown.style.scss'
import {toggleCart} from '../../redux/cart/cart.actions'

const CartDropdown = ({history}) => {
    const dispatch = useDispatch()
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
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCart())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


export default withRouter(CartDropdown)
