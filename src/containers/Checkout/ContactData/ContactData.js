import React, { Component } from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'
import { SubmitBTN } from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import classes from './ContactData.module.css'

class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 20
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      house: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your House'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your City'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayName: 'Fastest' },
            { value: 'regular', displayName: 'Regular' }
          ]
        },
        value: 'fastest',
        validation: {
          required: false
        },
        valid: true
      }
    },
    loading: false,
    formValidity: false
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({ loading: true })

    const customerData = {}

    for (let customerInfoIdentifier in this.state.orderForm) {
      customerData[customerInfoIdentifier] = this.state.orderForm[customerInfoIdentifier].value
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: customerData
    }

    axios.post(`/orders.json`, order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })

      .catch(error => {
        this.setState({ loading: false })
      })
  }

  checkValidity = (value, rules) => {
    let isValid = true

    if(!rules) {
      return true
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
  }

  onChangedHandler = (event, inputIdentifier) => {
    // create clone copy of orderForm
    const updateOrderForm = {
      ...this.state.orderForm
    }

    // create clone copy of orderForm's value object
    // like name, address, email etc
    const updateFormElement = {
      ...updateOrderForm[inputIdentifier]
    }

    // put input value in selected object's value property
    updateFormElement.value = event.target.value

    // check input validity
    updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation)

    // check input field touched
    updateFormElement.touched = true

    // update the orderForm's clone copy with update data
    updateOrderForm[inputIdentifier] = updateFormElement


    // check full form validity
    let fullFormValidity = true
    for (let inputIdentifier in updateOrderForm) {
      fullFormValidity = updateOrderForm[inputIdentifier].valid && fullFormValidity
    }

    // setState with update data of orderForm
    this.setState({ orderForm: updateOrderForm, formValidity: fullFormValidity })
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }


    let form = (<form onSubmit={this.orderHandler}>
      {formElementsArray.map((formElement) => {
        return <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.onChangedHandler(event, formElement.id)}
        />
      })}

      <SubmitBTN disable={!this.state.formValidity}>Order Now</SubmitBTN>
    </form>)
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Give your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;