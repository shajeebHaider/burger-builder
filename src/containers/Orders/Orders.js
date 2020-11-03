import React, { Component } from 'react'
import axios from '../../axios-orders'

import Spinner from '../../components/UI/Spinner/Spinner'
import Order from '../../components/Order/Order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Modal from "../../components/UI/Modal/Modal";
import DeleteOrder from '../../components/Order/DeleteOrder/DeleteOrder'

class Orders extends Component {

  state = {
    orders: [],
    loading: true,
    error: '',
    removing: false,
    selectedOrder: ''
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

  deleteHandler = () => {
    let id = this.state.selectedOrder

    let order = [...this.state.orders]
    let findIndex = order.findIndex(el => el.id === id)

    order.splice(findIndex, 1)
    this.setState({ orders: order })


    // // code for direct delete from firebase
    // axios.delete(`/orders/${id}.json`, )
    // .then(res => console.log(res))
    // console.log(this.state.selectedOrder)

    this.setState({ removing: false })
  }

  deleteItemHandler = (id) => {
    this.setState({ removing: true, selectedOrder: id })
  }

  closeModalHandler = () => {
    this.setState({ removing: false, selectedOrder: '' })
  }

  render() {
    let order = <h1 style={{ textAlign: 'center', color: '#ff8a00' }}>No Data Found</h1>

    if (this.state.loading) {
      order = <Spinner/>
    }

    if (this.state.orders.length > 0) {
      order = <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            id={order.id}
            ingredients={order.ingredients}
            // turn number string to number
            price={+order.price}
            deleteItem={() => this.deleteItemHandler(order.id)}
          />
        ))}
      </div>
    }

    if (this.state.error) {
      order = <h2 style={{ textAlign: 'center', color: 'red' }}>
        {this.state.error.message}
      </h2>
    }
    return (
      <div>
        <Modal
          closeModal={this.closeModalHandler}
          show={this.state.removing}>
          <DeleteOrder
            delete={this.deleteHandler}
            cancel={this.closeModalHandler}
          />
        </Modal>
        {order}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios)