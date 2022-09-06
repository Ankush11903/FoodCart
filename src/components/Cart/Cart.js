import React from "react";
import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx=useContext(CartContext);
  const Amount=cartCtx.totalAmount.toFixed(2);
  const showOrder= cartCtx.items.length > 0;
  const removeItemHandler=(id)=>{
    cartCtx.removeItem(id);
  }
  const addItemHandler=(item)=>{
    item.amount=item.amount+1;
    cartCtx.addItem(item);}
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem id={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={removeItemHandler.bind(null,item.id)} onAdd={addItemHandler.bind(null,item)} />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹ {Amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {showOrder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
