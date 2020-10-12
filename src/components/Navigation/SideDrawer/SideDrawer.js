import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import Aux from '../../../hoc/Auxiliary'
import BackDrop from '../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {

  const attachedClasses = [classes.SideDrawer, props.showSideDrawer ? classes.Open : classes.Close]

  return (
    <Aux>
      <BackDrop
        show={props.showSideDrawer}
        closeModal={props.closeSideDrawer}
      />
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

export default sideDrawer