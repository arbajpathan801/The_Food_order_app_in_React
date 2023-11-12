import Card from "../../UI/Card/card";
import classes from "./AvailableMeals.module.css";
import MealsItems from "./MealsItems/MealsItems";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealsItems
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          ></MealsItems>
        ))}
      </ul>
    </Card>
  );
};
export default AvailableMeals;