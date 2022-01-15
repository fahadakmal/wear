import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishAbleKey = 'pk_test_4mnzqDoSMBy4mVLAHnrtqH8Q00U1dSf7bk';

  const onToken = (token) => {
    console.log(token);

    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      }
    }).then((response) => {
      alert('payment successful')

    }).catch((error) => {
      console.log('payment error', JSON.parse(error));
      alert('There was an issue with our payment .Please sure you ause the provided credit card is correct');
    })
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
