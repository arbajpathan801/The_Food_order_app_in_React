import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";

const MealItemForm = (props) => {
 const amountRef=useRef()
 const [validAmount,setValidAmount]=useState(true)
  const addToCart = (e) => {
    e.preventDefault();
    console.log('mealitemform hi');
    const enteredAmount=amountRef.current.value
    const enteredAmountNumber= +enteredAmount
    if (enteredAmount.trim().length===0||enteredAmount<1||enteredAmount>5){
      setValidAmount(false)
      return;
    }
    console.log (enteredAmountNumber)
    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={addToCart}>
      <Input
      ref={amountRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue:'1'
        }}
      />
      <button type="submit">+ Add</button>
      {!validAmount && <p>Please inter valid amount (1-5) .</p>}
    </form>
  );
};
export default MealItemForm;
