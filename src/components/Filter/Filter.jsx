import React from 'react'
import Input from '../Input/Input'
import './Filter.scss'
const Filter = (props) => {
  return (
    <Input valid={props.valid} onChange={props.filterList} label='' id='3' type='text' name='Aradığınız Kişi'/>
  )
}
export default Filter;