import React, { Component } from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import classes from './Layout.module.css'

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerShowHandler = () => {
    this.setState((preState) => {
      return {showSideDrawer: !preState.showSideDrawer}
    })
  }

  render () {
    return (
      <Aux>
        <Toolbar
          drawerToggleClicked={this.sideDrawerShowHandler}/>
        <SideDrawer
          showSideDrawer={this.state.showSideDrawer}
          closeSideDrawer={this.sideDrawerClosedHandler}

        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout