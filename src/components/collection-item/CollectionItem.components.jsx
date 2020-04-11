import React from 'react'

import {useDispatch} from 'react-redux'
import {addItemToCart} from '../../redux/cart/cart.actions'
import {CollectionItemContainer, CollectionItemButton,
        CollectionItemImage, CollectionItemFooterContainer,
        CollectionItemName, CollectionItemPrice} from './CollectionItem.styles'

const CollectionItem = ({item}) => {
    const dispatch = useDispatch()

    const {name, price, imageUrl} = item

    return (
        <CollectionItemContainer>
            <CollectionItemImage imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>{price}</CollectionItemPrice>
            </CollectionItemFooterContainer>
            <CollectionItemButton inverted
                onClick={() => dispatch(addItemToCart(item))}>ADD TO CART</CollectionItemButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem
