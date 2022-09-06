import React from 'react'
import classes from './MealItem.module.css';
import MealItemInput from './MealItemInput';
import { useContext } from "react";
import CartContext from '../../../store/cart-context';

export default function MealItem(props) {
  const cartCtx=useContext(CartContext);
  const AddItemHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  return (
    
    <form className={classes.meal}>
    <div >
        <h3 >{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹ {props.price}</div>
    </div>
    <div>
        <MealItemInput id={props.id} onAddToCart={AddItemHandler}/>
    </div>
    </form>
  )
}
