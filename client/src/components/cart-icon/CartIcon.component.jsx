import React from 'react'
import {CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.style'
import {useDispatch, useSelector} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({onClick}) => {
    const dispatch = useDispatch()
    const pCartItemCount = useSelector(selectCartItemsCount)

    return (
        <CartIconContainer onClick={() => dispatch(toggleCart())}>
            <ShoppingIcon/>
            <ItemCount>{pCartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon
