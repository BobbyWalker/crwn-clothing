import React from 'react'

import './CheckoutPage.style.scss'
import {useSelector} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import StripeButton from '../../components/stripe-button/StripeButton.comonent'

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
            {pCartItems.map(item => <CheckoutItem item={item} key={item.id}/>)}
            <div className={'total'}>
                <span>TOTAL: ${pCartTotal}</span>
            </div>
            <div className={'test-warning'}>
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeButton price={pCartTotal}/>
        </div>
    )
}

export default CheckoutPage
