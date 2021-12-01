import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BurgerHome from "./components/Show Burger/BurgerHome";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BurgerHome />
      </BrowserRouter>
    </div>
  );
}

export default App;
