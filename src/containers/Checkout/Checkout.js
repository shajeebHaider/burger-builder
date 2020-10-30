import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0
  }

  componentDidMount() {

    // get params from url search----------------

    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let price = 0

    // iteration for params by url
    for (let param of query.entries()) {
      if(param[0] === 'price') {
        // take price from query params
        price = param[1]
      }
      else {
        // insert value into ingredients object
        ingredients[param[0]] = +param[1]
      }
    }

    this.setState({ ingredients: ingredients, totalPrice: price })
  }

  checkoutCancelHandler = () => {
    // history go back by router goback()
    this.props.history.goBack()
  }

  checkoutContinueHandler = () => {
    // history replace by router
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}/>

          <Route
            path={this.props.match.path + '/contact-data'}
            render={(props) => <ContactData
              ingredients={this.state.ingredients}
              totalPrice = {this.state.totalPrice}
              {...props}/>}  />
      </div>
    );
  }
}

export default Checkout;