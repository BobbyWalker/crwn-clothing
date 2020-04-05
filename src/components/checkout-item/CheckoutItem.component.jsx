import React from 'react'

import './CheckoutItem.style.scss'
import {useDispatch} from 'react-redux'
import {cartItemRemove} from '../../redux/cart/cart.actions'

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch()
    const {imageUrl, name, quantity, price} = item
    return (
        <div className={'checkout-item'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className={'name'}>{name}</span>
            <span className={'quantity'}>{quantity}</span>
            <span className={'price'}>{price}</span>
            <div className={'remove-button'}
                 onClick={() => dispatch(cartItemRemove(item))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem
