import React from 'react'
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = props => {

  const ingredientsSummery = Object.keys(props.ingredietrs)
                                   .map((igKey, index) => <li key={igKey + index}>
                                     <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                                     : {props.ingredietrs[igKey]}
                                   </li>)

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>
        {ingredientsSummery}
      </ul>
      <p>Total price is : <strong>{props.totalPrice.toFixed(2)}</strong> $</p>
      <p>Continue to Checkout?</p>

      <Button clicked={props.closeModal} btnType='Danger'>CANCEL</Button>
      <Button clicked={props.continuePurchase} btnType='Success'>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary