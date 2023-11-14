import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
const Form = () => {
  const addToCart = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={addToCart}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default Form;