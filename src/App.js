import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Aux from './hoc/Auxiliary/Auxiliary'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {

  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/' exact component={BurgerBuilder}/>
            <Route render={() => <h1>Page not found !!</h1>} />
          </Switch>
        </Layout>
      </Aux>
    )
  }
}

export default App
