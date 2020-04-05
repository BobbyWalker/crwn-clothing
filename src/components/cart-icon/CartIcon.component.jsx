import React from 'react'

import {ReactComponent as ShoppingIcon} from '../header/cart.svg'

import './CartIcon.styles.scss'
import {useDispatch} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'

const CartIcon = ({onClick}) => {
    const dispatch = useDispatch()

    return (
        <div className={'cart-icon'} onClick={() => dispatch(toggleCart())}>
            <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>0</span>
        </div>
    )
}

export default CartIcon
