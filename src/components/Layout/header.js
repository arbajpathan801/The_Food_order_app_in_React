import { Fragment } from "react";
import classes from "./header.module.css";
import image from "../../assets/meals.jpg";
import HeaderCartButton from "./headerCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onCartClick}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
