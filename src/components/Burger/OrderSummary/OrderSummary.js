import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   console.log(`[Order Summary] did update`)
  // }

  render () {
    const ingredientsSummery = Object.keys(this.props.ingredietrs)
      .map((igKey, index) => <li key={igKey + index}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
        : {this.props.ingredietrs[igKey]}
      </li>)

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
          {ingredientsSummery}
        </ul>
        <p>Total price is : <strong>{this.props.totalPrice.toFixed(2)}</strong> $</p>
        <p>Continue to Checkout?</p>

        <Button clicked={this.props.closeModal} btnType='Danger'>CANCEL</Button>
        <Button clicked={this.props.continuePurchase} btnType='Success'>CONTINUE</Button>
      </Aux>
    )
  }
}

export default OrderSummary