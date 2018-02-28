import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    debugger;

    return(
    <StripeCheckout
      amount = {500}
      token = {token => console.log(token)}
      stripeKey = {process.env.REACT_APP_STRIPE_KxEY}

     >
     <button className = "btn">
        Pay Up
     </button>
     </StripeCheckout>
    );
   }
  }


export default Payments;