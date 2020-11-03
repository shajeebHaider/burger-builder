import React from 'react'
import classes from './Input.module.css'

const input = props => {

  let inputItem

  const inputClasses = [classes.InputElement]

  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case('input'):
      inputItem = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
      break

    case('textarea'):
      inputItem = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
      break

    case ('select'):
      inputItem = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option
              key={option.value}
              value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      )
      break

    default:
      inputItem = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.title}</label>
      {inputItem}
    </div>
  )
}

export default input