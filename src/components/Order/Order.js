import React from 'react';

import { Button } from '../UI/Button/Button'
import classes from './Order.module.css'

const order = (props) => {

  let data = (Object.entries(props.ingredients)).map(el => {
    return <span
      className={classes.IGItem}
      key={el[0]}>{el[0]} ({el[1]})</span>
  })

  return (
    <div className={classes.Order}>
      <div className={classes.OrderInfo}>
        <p>Ingredients: {data}</p>
        <p>Price: <strong>USD {props.price.toFixed(2)} $</strong></p>
      </div>

      <div className={classes.OrderCancel}>
        <Button
          btnType='Danger'
          btnCenter='Center'
          clicked={props.deleteItem}>&times;</Button>
      </div>
    </div>
  );
};

export default order;