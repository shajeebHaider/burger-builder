import React, { Component } from 'react'

import axios from '../../axios-orders'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerBuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  capsicum: 0.6
}

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: null
  }

  componentDidMount() {
    axios.get(`/ingredients.json`)
      .then(res => {
        this.setState({ ingredients: res.data })
      }).catch(error => {
      this.setState({ error: error })
    })
  }

  // updatePurchasableState -----------------
  updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((acc, cuVal) => {
        return acc + cuVal
      }, 0)
    this.setState({ purchasable: sum > 0 })
  }

  // addIngredientHandler -----------------------
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]

    if (oldCount >= 5) return

    const updateCount = oldCount + 1

    const updateIngredients = { ...this.state.ingredients }
    updateIngredients[type] = updateCount

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
    this.updatePurchasableState(updateIngredients)
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
    this.updatePurchasableState(updateIngredients)
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.setState({ loading: true })

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Amit Samadder (Abir)',
        address: {
          house: '65 Mirpur',
          city: 'Dhaka',
          country: 'Bangladesh'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'faster'
    }

    axios.post(`/orders.json`, order)
      .then(response => {
        this.setState({ loading: false, purchasing: false })
      })

      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      })
  }


  render() {
    const disableLess = { ...this.state.ingredients }
    const disableMore = { ...this.state.ingredients }

    for (let key in disableLess) {
      disableLess[key] = disableLess[key] <= 0
    }

    for (let key in disableMore) {
      disableMore[key] = disableMore[key] >= 5
    }

    let orderSummary = null
    let burger = this.state.error
      ? <p style={{ textAlign: 'center', color: 'red' }}>
        {this.state.error.message}</p>
      : <Spinner/>

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BurgerBuildControls
            price={this.state.totalPrice}
            ingredientCount={this.state.ingredients}
            addIngredient={this.addIngredientHandler}
            remIngredient={this.removeIngredientHandler}
            disableLess={disableLess}
            disableMore={disableMore}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      )

      orderSummary = <OrderSummary
        closeModal={this.purchaseCancelHandler}
        continuePurchase={this.purchaseContinueHandler}
        ingredietrs={this.state.ingredients}
        totalPrice={this.state.totalPrice}
      />
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <Aux>
        <Modal
          closeModal={this.purchaseCancelHandler}
          show={this.state.purchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)