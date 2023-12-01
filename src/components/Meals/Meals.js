import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import Summary from "./summary";
const Meals = (props) => {
  return (
    <Fragment>
      <Summary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;