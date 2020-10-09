import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerBuilders from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  // addIngredientHandler -----------------------
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    const updateCount = oldCount + 1

    const updateIngredients = { ...this.state.ingredients }
    updateIngredients[type] = updateCount

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
  }

  // removeIngredientHandler ----------------
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) return

    const updateCount = oldCount - 1

    const updateIngredients = { ...this.state.ingredients }
    updateIngredients[type] = updateCount

    const priceSubtraction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceSubtraction

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
  }

  render () {

    const disableInfo = { ...this.state.ingredients }

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BurgerBuilders
          price = {this.state.totalPrice}
          addIngredient={this.addIngredientHandler}
          remIngredient={this.removeIngredientHandler}
          disabled={disableInfo}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder