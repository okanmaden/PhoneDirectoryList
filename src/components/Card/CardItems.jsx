import React, { Fragment } from "react";
import "./CardItems.scss";
import Button from "../Button/Button";
import Filter from "../Filter/Filter";

const CardItems = (props) => {
  const getid = (e) => {
    if(e.target.type === 'button'){
      props.delete(e.target.id);
    }
  }
  const filterList = (e) => {
    props.filter(e.target.value)
  }
  const getEditInput = (e) => {
    props.edit(e.target.id)
  }
  return (
    <Fragment>
      <Filter valid={props.valid} filterList={filterList} />
      <div className="card-items">
        <ul>
          {props.data.map((item) => {
            return (
              <li id={item.id} key={item.id}>
                {item.name}/{item.number}
                <Button getId={getid} id={item.id} type="button" title="Sil" />
                <Button getId={getEditInput} id={item.id} type='button' title='düzenle'></Button>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default CardItems;
