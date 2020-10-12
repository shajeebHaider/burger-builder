import React from 'react'
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

export default modal