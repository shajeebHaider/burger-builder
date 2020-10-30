import React, { Component } from 'react'
import axios from '../../axios-orders'

import Spinner from '../../components/UI/Spinner/Spinner'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {

  state = {
    orders: [],
    loading: true,
    error: ''
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrder = []
        for (let key in res.data) {
          fetchedOrder.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({ loading: false, orders: fetchedOrder })
      })
      .catch(err => {
        this.setState({ loading: true, error: err })
      })
  }

  render() {

    console.log(this.state.orders)
    let data = <Spinner />

    if(this.state.orders.length > 0) {
      data = <div>
        <Order/>
        <Order/>
        <h5>
          {this.state.orders[0].id}
        </h5>
      </div>
    }

    if(this.state.error) {
      data = <h2 style={{textAlign: 'center', color: 'red'}}>{this.state.error.message}</h2>
    }
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios)