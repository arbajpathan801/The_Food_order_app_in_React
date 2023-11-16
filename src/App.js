import { Fragment, useState } from "react";
import Modul from "./components/Cart/Modul";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart,setShowCart] = useState(false);
  

const onCartClick=() =>{
setShowCart(true)
}
const onCloseCart=() => {
  setShowCart(false)
}
  return (
    <Fragment>
     {showCart && <Modul onCloseCart={onCloseCart}/>}
      <Header onCartClick={onCartClick}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
