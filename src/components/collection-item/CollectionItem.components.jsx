import React from 'react'

import './CollectionItem.style.scss'
import CustomButton from '../custom-button/CustomButton.component'
import {useDispatch} from 'react-redux'
import {addItemToCart} from '../../redux/cart/cart.actions'

const CollectionItem = ({item}) => {
    const dispatch = useDispatch()

    const {name, price, imageUrl} = item

    return (
        <div className={'collection-item'}>
            <div className={'image'}
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}/>
            <div className={'collection-footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <CustomButton inverted
                onClick={() => dispatch(addItemToCart(item))}>ADD TO CART</CustomButton>
        </div>
    )
}

export default CollectionItem
