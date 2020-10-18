import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css'

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.Count}>{props.ingredientCount}</div>
      <button
        onClick={props.remove}
        className={classes.Less}
        disabled={props.disableLess}
      >Less
      </button>
      <button
        onClick={props.added}
        className={classes.More}
        disabled={props.disableMore}
      >
        {props.disableMore ? 'Only 5' : 'More'}
      </button>
    </div>
  )
}

buildControl.propTypes = {
  label: PropTypes.string.isRequired
}

export default buildControl