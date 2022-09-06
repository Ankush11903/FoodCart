import { useContext, useEffect,useState } from "react";
import CartIcon from "../Cart/CardIcon";
import classes from "./CartIconButton.module.css";
import CartContext from "../../store/cart-context";

export default function CardIconButton(props) {
  const [btnIshig, setbtnIshig] = useState(false)
  const cartctx = useContext(CartContext);
  const {items}=cartctx;
  const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnIshig ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIshig(true);

    const timer = setTimeout(() => {
      setbtnIshig(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>

        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
}
