import classes from './MealsItems.module.css'
const MealsItems= (props) => {
    return (
        <li className={classes.meals}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price}</div>
            </div>
        </li>
    )
}
export default MealsItems;