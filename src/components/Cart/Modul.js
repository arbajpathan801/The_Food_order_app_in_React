import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Card from "../../UI/Card/card";
import classes from './modul.module.css'

const Backdrop= () => {
  return <div className={classes.backdrop}></div>
}

const OverLay = () => {
  return (
    <Card className={classes.overlay}>
        
      <span>sushi</span>
      <h2>Total Amount</h2>
      <span className={classes.price}>$35.62</span>
      <footer className={classes.action}>
        <button className={classes.close}>Close</button>
        <button className={classes.order}>Order</button>
      </footer>
      
    </Card>
  );
};
const ModulElement=document.getElementById('overlays')

const Modul = () => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <OverLay  />,
        ModulElement
      )}
      {ReactDom.createPortal(
        <Backdrop  />,
        ModulElement
      )}
    </Fragment>
  );
};
export default Modul;
