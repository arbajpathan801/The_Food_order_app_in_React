import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnHighlight,setBtnHighlight]=useState(false)
  const cartCtx = useContext(CartContext);
  const {items}=cartCtx
  const quantity=items.reduce((curQuantity ,item) =>  {
    return curQuantity +Number(item.amount)
  },0)
  const btnClasses=`${classes.button} ${btnHighlight ?classes.bump:''}`
  useEffect(()=> {
    if (items.length===0){
      return;
    }
    setBtnHighlight(true)
    const timer=setTimeout(() => {
      setBtnHighlight(false)
    }, 300);
    return () => {
      clearTimeout(timer)
    }
  },[items])
  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span>{cartCtx.msg}</span> */}
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};
export default HeaderCartButton;
