import React from 'react'
import PropTypes from 'prop-types'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price : <strong>{props.price.toFixed(2)}</strong> $</p>
      {controls.map((el, index) => (
        <BuildControl
          key={el.label + index}
          label={el.label}
          added={() => props.addIngredient(el.type)}
          remove = {() => props.remIngredient(el.type)}
          disabled={props.disabled[el.type]}
        />
      ))}

      <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.ordered}
      >ORDER NOW</button>
    </div>
  )
}

buildControls.propTypes = {
  price: PropTypes.number.isRequired,
  addIngredient: PropTypes.func.isRequired,
  remIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.object.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
}

export default buildControls