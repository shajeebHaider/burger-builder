import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import BackDrop from '../../UI/Backdrop/Backdrop'
import classes from './Modal.module.css'

class Modal extends Component  {

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(`[Modal] did update`)
  }

  render () {
    return (
      <Aux>
        <BackDrop closeModal={this.props.closeModal} show={this.props.show}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}

export default Modal