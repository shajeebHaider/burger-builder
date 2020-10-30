import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType], classes[props.btnCenter]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)

button.propTypes = {
  clicked: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default button