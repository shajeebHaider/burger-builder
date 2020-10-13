import React from 'react'
import PropTypes from 'prop-types'
import classes from './NavItem.module.css'

const navItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  )
}

navItem.propTypes = {
  link: PropTypes.string.isRequired
}

export default navItem