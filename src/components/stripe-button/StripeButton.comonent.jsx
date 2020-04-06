import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100,
        publishableKey = 'pk_test_RBRyqJB9b7S6TLXQzf4TC98r00MF11TPmG'

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout
            name={'Crwn Outfitters, Inc.'}
            label={'Pay Now'}
            billingAddress
            shippingAddress
            image={'https://svgshare.com/i/CUz.svg'}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={'Pay Now'}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
