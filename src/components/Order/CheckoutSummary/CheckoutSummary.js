import React from 'react';

import { Button } from '../../UI/Button/Button'
import Burger from '../../Burger/Burger'

import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well !!</h1>
      <Burger ingredients={props.ingredients}/>
      <Button btnType='Danger' btnCenter='Center' clicked={props.checkoutCancel}>Cancel</Button>
      <Button btnType='Success' clicked={props.checkoutContinue}>Continue</Button>
    </div>
  );
};

export default checkoutSummary;