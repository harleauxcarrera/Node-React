import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    debugger;

    return(
    <StripeCheckout
      amount = {500}
      token = {token => this.props.handleToken(token)}
      stripeKey = {process.env.REACT_APP_STRIPE_KEY}
     >
     <button className = "btn">
        Pay Up
     </button>
     </StripeCheckout>
    );
   }
  }

// wire up connect helper

export default connect(null, actions) (Payments);
