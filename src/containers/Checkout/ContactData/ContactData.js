import React, { Component } from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      house: '',
      city: '',
      country: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({ loading: true })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
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
        this.setState({ loading: false })
        this.props.history.push('/')
      })

      .catch(error => {
        this.setState({ loading: false})
      })
  }

  render() {
    let form = (<form>
      <input className={classes.Input} type="text" name='name' placeholder='Your Name'/>
      <input className={classes.Input} type="email" name='email' placeholder='Your Email'/>
      <input className={classes.Input} type="text" name='house' placeholder='Your House'/>
      <input className={classes.Input} type="text" name='city' placeholder='Your City'/>
      <input className={classes.Input} type="text" name='country' placeholder='Your Country'/>
      <Button clicked={this.orderHandler} btnType='Success' btnCenter='Center'>ORDER</Button>
    </form>)
    if(this.state.loading) {
      form = <Spinner />
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