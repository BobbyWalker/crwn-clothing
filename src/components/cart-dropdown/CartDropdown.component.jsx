import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {CartDropdownContainer, CartEmptyMessage, CartItemsContainer, CheckoutButton} from './CartDropdown.style'
import {toggleCart} from '../../redux/cart/cart.actions'

const CartDropdown = ({history}) => {
    const dispatch = useDispatch()
    const pCartItems = useSelector(selectCartItems)

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {pCartItems.length ?
                    pCartItems.map(c => <CartItem key={c.id} item={c}/>)
                    :
                    <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
                }
            </CartItemsContainer>
            <CheckoutButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCart())
            }}>GO TO CHECKOUT</CheckoutButton>
        </CartDropdownContainer>
    )
}


export default withRouter(CartDropdown)
