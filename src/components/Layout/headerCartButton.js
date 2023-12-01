import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log ('inside headerbtn' , cartCtx.items)
  const quantity=cartCtx.items.reduce((curQuantity ,item) =>  {
    return curQuantity +Number(item.amount)
  },0)
  // let quantity = 0;
  // cartCtx.items.forEach((item) => {
  //   quantity = quantity + Number(item.amount);
  //   console.log(item);
  // });
  return (
    <button className={classes.button} onClick={props.onShowCart}>
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
