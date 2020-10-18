import React from 'react'
import PropTypes from 'prop-types'
import classes from './Backdrop.module.css'

const backdrop = (props) => (
  props.show ?
    <div
      onClick={props.closeModal}
      className={classes.Backdrop}/> : null
)

backdrop.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default backdrop