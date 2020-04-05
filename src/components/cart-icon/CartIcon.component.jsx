import React from 'react'

import {ReactComponent as ShoppingIcon} from '../header/cart.svg'

import './CartIcon.styles.scss'
import {useDispatch, useSelector} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({onClick}) => {
    const dispatch = useDispatch()
    const pCartItemCount = useSelector(selectCartItemsCount)

    return (
        <div className={'cart-icon'} onClick={() => dispatch(toggleCart())}>
            <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>{pCartItemCount}</span>
        </div>
    )
}

export default CartIcon
