import { Fragment } from "react";
import Modul from "./components/Cart/Modul";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Modul />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
