import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css'

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        onClick={props.remove}
        className={classes.Less}
        disabled={props.disabled}
      >Less</button>
      <button onClick={props.added} className={classes.More}>More</button>
    </div>
  )
}

buildControl.propTypes = {
  label: PropTypes.string.isRequired
}

export default buildControl