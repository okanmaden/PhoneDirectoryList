import React from 'react'
import './Button.scss'
const Button = (props) => {
 
  return (
    <div className='deneme'>
        <button onClick={props.getId} type={props.type} id={props.id} className='form-button'>{props.title}</button>
    </div>
  )
}

export default Button