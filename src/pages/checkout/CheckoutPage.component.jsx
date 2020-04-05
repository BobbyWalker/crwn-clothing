import React from 'react'

import './CheckoutPage.style.scss'
import {useSelector} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const CheckoutPage = (props) => {
    const pCartItems = useSelector(selectCartItems)
    const pCartTotal = useSelector(selectCartTotal)

    return (
        <div className={'checkout'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>Quantity</span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>
            {pCartItems.map(item => item.name)}
            <div className={'total'}>
                <span>TOTAL: ${pCartTotal}</span>
            </div>
        </div>
    )
}

export default CheckoutPage
