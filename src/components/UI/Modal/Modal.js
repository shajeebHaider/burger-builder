import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxiliary'
import BackDrop from '../../UI/Backdrop/Backdrop'
import classes from './Modal.module.css'

const modal = props => (
  <Aux>
    <BackDrop closeModal={props.closeModal} show={props.show}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Aux>
)

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}

export default modal