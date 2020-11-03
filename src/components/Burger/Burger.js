import React from 'react'
import BurgerIngredient from './Burgeringredient/Burgeringredient'

import classes from './Burger.module.css'

const burger = (props) => {
  // take care about this start
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, index) => {
      return <BurgerIngredient key={igKey + index} type={igKey}/>
    })
  })
    // ingredient counts
    .reduce((acu, curEl) => {
      return acu.concat(curEl)
    }, [])
  // take care about this end

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding Ingredient</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger