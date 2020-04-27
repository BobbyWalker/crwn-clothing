import React from 'react'
import {useDispatch} from 'react-redux'
import {addItemToCart, cartItemDelete, cartItemRemove} from '../../redux/cart/cart.actions'
import {
    CheckoutItemContainer, CheckoutArrow, CheckoutImage,
    CheckoutImageContainer, CheckoutName, CheckoutPrice,
    CheckoutQuantity, CheckoutRemoveButton, CheckoutQuantityContainer
} from './CheckoutItem.styles'

const CheckoutItem = ({item}) => {
    const dispatch = useDispatch()
    const {imageUrl, name, quantity, price} = item
    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <CheckoutImage src={imageUrl} alt={name}/>
            </CheckoutImageContainer>
            <CheckoutName>{name}</CheckoutName>
            <CheckoutQuantityContainer>
                <CheckoutArrow
                    onClick={() => dispatch(cartItemRemove(item))}>&#10094;</CheckoutArrow>
                <CheckoutQuantity>{quantity}</CheckoutQuantity>
                <CheckoutArrow
                    onClick={() => dispatch(addItemToCart(item))}>&#10095;</CheckoutArrow>
            </CheckoutQuantityContainer>
            <CheckoutPrice>{price}</CheckoutPrice>
            <CheckoutRemoveButton
                 onClick={() => dispatch(cartItemDelete(item))}>
                &#10005;
            </CheckoutRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
