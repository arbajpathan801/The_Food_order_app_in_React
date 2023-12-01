import React from "react";
import classes from './summary.module.css'

const Summary = (props) => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All out meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};
export default Summary;