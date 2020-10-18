import React from 'react'
import NavItem from './NavItem/NavItem'

import classes from './NavItems.module.css'

const navItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavItem link='/' active>Burger Builder</NavItem>
      <NavItem link='/'>Checkout</NavItem>
    </ul>
  )
}

export default navItems