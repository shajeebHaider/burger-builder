import React from 'react';

import Button from '../../UI/Button/Button'
import classes from './DeleteOrder.module.css'

const deleteOrder = (props) => {
  return (
    <div className={classes.DeleteAlert}>
      <div className={classes.AlertText}>
        <h2>Are You Sure ???</h2>
        <h3>You want to delete your Order ???</h3>

        <small>You can't undo your Order</small>
      </div>
      <Button btnType='Danger' clicked={props.delete}>Delete</Button>
      <Button btnType='Success' clicked={props.cancel}>Cancel</Button>
    </div>
  );
};

export default deleteOrder;