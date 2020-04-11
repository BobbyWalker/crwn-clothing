import React from 'react'

import {useSelector} from 'react-redux'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import {CheckoutPageButton, CheckoutPageContainer, CheckoutPageHeader,
        CheckoutPageHeaderBlock, CheckoutPageTotal, CheckoutTestWarning} from './CheckoutPage.styles'

const CheckoutPage = (props) => {
    const pCartItems = useSelector(selectCartItems)
    const pCartTotal = useSelector(selectCartTotal)

    return (
        <CheckoutPageContainer>
            <CheckoutPageHeader>
                <CheckoutPageHeaderBlock>
                    <span>Product</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Description</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Quantity</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Price</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Remove</span>
                </CheckoutPageHeaderBlock>
            </CheckoutPageHeader>
            {pCartItems.map(item => <CheckoutItem item={item} key={item.id}/>)}
            <CheckoutPageTotal>
                <span>TOTAL: ${pCartTotal}</span>
            </CheckoutPageTotal>
            <CheckoutTestWarning>
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </CheckoutTestWarning>
            <CheckoutPageButton price={pCartTotal}/>
        </CheckoutPageContainer>
    )
}

export default CheckoutPage
