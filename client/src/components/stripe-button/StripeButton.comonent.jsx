import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100,
        publishableKey = 'pk_test_RBRyqJB9b7S6TLXQzf4TC98r00MF11TPmG'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(res => {
                alert('Payment successful')
            })
            .catch(err => {
                console.log('Payment error: ', err)
                alert('There was an issue with your payment.  Please use the provided card information')
            })
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
