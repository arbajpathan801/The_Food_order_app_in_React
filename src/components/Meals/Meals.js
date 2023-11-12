import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import Summary from "./summary";
const Meals = (props) => {
  return (
    <Fragment>
      <Summary />
      <AvailableMeals mealsList={props.mealsList}/>
    </Fragment>
  );
};
export default Meals;