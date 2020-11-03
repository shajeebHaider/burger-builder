import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType], classes[props.btnCenter]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

const SubmitBTN = (props) => (
  <button className={classes.SubmitBTN} disabled={props.disable}>{props.children}</button>
)

export { Button, SubmitBTN }