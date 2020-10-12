import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = (props) => (
  props.show ?
    <div
      onClick={props.closeModal}
      className={classes.Backdrop}/> : null
)

export default backdrop