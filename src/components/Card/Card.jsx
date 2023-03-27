import React, { useState } from "react";
import "./Card.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import CardItems from "./CardItems";
const Card = () => {
  const [name,setName] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);

  const nameHandler = (e) => {
    if(e.target.value === ''){
      setIsValidName(true);
    }
    if(e.target.value !== ''){
      setIsValidName(false);
    }
    setName(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name)
    setData((prevState => {
        return [...prevState,{name:name,number:number, id:Math.random().toString()}]
    }))
    setName('');
    setNumber('');
  }

  const numberHandler = (e) => {
    // console.log(e.target.value);
    if(e.target.value === ''){
      setIsValidNumber(true);
    }
    if(e.target.value !== ''){
      setIsValidNumber(false);
    }
    setNumber(e.target.value)
  }
  
  const deleteAllHandler = (e) => {
    e.preventDefault()
    setData([]);
  }
  const deleteHandler = (id) => {
    setData(prevState => {
      const deletedList = prevState.filter(data => data.id !== id)
      return deletedList;
    })
  }
  const filterHandler = (text) => {
    const filteredList = data.filter((item) => {
      return Object.keys(item).some((key) => 
        item[key].toString().toLowerCase().includes(text.toLocaleLowerCase())
      )
    })
    setList(filteredList)
    // console.log(list)
  }

  const editHandler = (id) => {
    data.map(item => {
      if(item.id === id){
        console.log(item.name)
      }
    })
  }
  return (
    <div className="card">
        <h1>TELEFON REHBERİM</h1>
        <CardItems valid={false} edit={editHandler} filter={filterHandler} delete={deleteHandler} data={list.length === 0 ? data : list}/>
      <form onSubmit={submitHandler}>
        <Input onChange={nameHandler} valid={isValidName}  label='İsim' id='1' type='text' name='Kaydedeceğiniz İsim' value={name} />
        <Input onChange={numberHandler} valid={isValidNumber}  label='Telefon Numarası' id='2' type='text' name='Kaydedeceğiniz Numara' value={number} />
        <Button type='submit' title='Ekle' />
      </form>
      <form onSubmit={deleteAllHandler}>
        <Button type='submit' title='Hepsini Sil' />
      </form>
    </div>
  );
};

export default Card;
