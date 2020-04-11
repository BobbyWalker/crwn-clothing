import React from 'react'
import {CartItemContainer, CartItemImage, CartItemDetails, CartItemDetailsName, CartItemDetailsPrice} from './CartItem.styles'

const CartItem = ({item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt={name}/>
        <CartItemDetails>
            <CartItemDetailsName>{name}</CartItemDetailsName>
            <CartItemDetailsPrice>{quantity} x ${price}</CartItemDetailsPrice>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem
