import React from 'react'
import {NavLink} from "react-router-dom";

import PropTypes from 'prop-types'
import classes from './NavItem.module.css'

const navItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

navItem.propTypes = {
  link: PropTypes.string.isRequired
}

export default navItem