import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import BackDrop from '../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {

  const attachedClasses = [classes.SideDrawer, props.showSideDrawer ? classes.Open : classes.Close]

  return (
    <Aux>
      <BackDrop
        show={props.showSideDrawer}
        closeModal={props.closeSideDrawer}/>

      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavItems/>
        </nav>
      </div>
    </Aux>
  )
}

sideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool.isRequired,
  closeSideDrawer: PropTypes.func.isRequired
}

export default sideDrawer