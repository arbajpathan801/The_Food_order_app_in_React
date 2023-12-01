import { useState } from "react";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart,setShowCart] = useState(false);
  

const showCartHandler=() =>{
setShowCart(true)
}
const hideCartHandler=() => {
  setShowCart(false)
}
  return (
    <CartProvider>
     {showCart && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
