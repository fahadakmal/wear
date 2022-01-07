import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe=price*100;
    const publishAbleKey='pk_test_4mnzqDoSMBy4mVLAHnrtqH8Q00U1dSf7bk';

   const  onToken = (token) => {
        console.log(token);
        alert('payment successful')
        // fetch('/save-stripe-token', {
        //   method: 'POST',
        //   body: JSON.stringify(token),
        // }).then(response => {
        //   response.json().then(data => {
        //     alert(`We are in business, ${data.email}`);
        //   });
        // });
      } 
    return (
       <StripeCheckout
       panelLabel='Pay Now'
       name="Wear CO."
       billingAddress
       shippingAddress
       image='https://svgshare.com/i/CUz.svg'
       description={`Your total is $${price}`}
       amount={priceForStripe}
       label='Pay Now'
       token={onToken}
       stripeKey={publishAbleKey}

       
       /> 
    )
}

export default StripeCheckoutButton
