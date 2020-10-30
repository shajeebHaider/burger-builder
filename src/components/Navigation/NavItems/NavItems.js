import React from 'react'
import NavItem from './NavItem/NavItem'

import classes from './NavItems.module.css'

const navItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavItem exact link='/'>Burger Builder</NavItem>
      <NavItem link='/orders'>Orders</NavItem>
    </ul>
  )
}

export default navItems