import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Card from "../../UI/Card/card";
import classes from './modul.module.css'

const Backdrop= (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const OverLay = (props) => {
  
  return (
    <Card className={classes.overlay}>
        
      <span>sushi</span>
      <h2>Total Amount</h2>
      <span className={classes.price}>$35.62</span>
      <footer className={classes.action}>
        <button className={classes.close} onClick={props.onClick}>Close</button>
        <button className={classes.order}>Order</button>
      </footer>
      
    </Card>
  );
};
const ModulElement=document.getElementById('overlays')

const Modul = (props) => {

  return (
    <Fragment>
      {ReactDom.createPortal(
        <OverLay onClick={props.onCloseCart}/>,
        ModulElement
      )}
      {ReactDom.createPortal(
        <Backdrop  onClick={props.onCloseCart}/>,
        ModulElement
      )}
    </Fragment>
  );
};
export default Modul;
