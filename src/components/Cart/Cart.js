import { useContext } from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Card from "../../UI/Card/card";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItemsInCart = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <Card className={classes["cart-List"]}>
          <li>
            Name : {item.name} Price : ${item.price} Quantity : {item.amount}
          </li>
        </Card>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItemsInCart && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;