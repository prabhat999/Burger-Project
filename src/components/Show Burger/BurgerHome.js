import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ViewBurgerList from "../Burger List/ViewBurgerList";
import CreateBurger from "../Create Burger/CreateBurger";
import DeleteBurger from "../Deleteburger/DeleteBurger";
import "./BurgerHome.css";
function BurgerHome() {
  const [burgers, setBurgers] = useState([]);
  return (
    <>
      <div id="header">
        <button className="btn">
          <Link to="/">Go to Home</Link>
        </button>
        <button className="btn">
          <Link to="/createburger">Go to create burger</Link>
        </button>
        <button className="btn">
          <Link to="/showlist">Go to Show burger</Link>
        </button>
      </div>
      <br />
      <br />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div id="banner">
              <h1>"Home Page"</h1>
            </div>
          }
        />
        <Route
          exact
          path="/createburger"
          element={<CreateBurger db={burgers} />}
        />
        <Route
          exact
          path="/editburger/:id"
          element={<CreateBurger db={burgers} />}
        />
        <Route
          exact
          path="/showList"
          element={<ViewBurgerList db={burgers} setBurgers={setBurgers} />}
        />
        <Route
          exact
          path="/deleteburger/:id"
          element={<DeleteBurger db={burgers} setBurgers={setBurgers} />}
        />
      </Routes>
    </>
  );
}

export default BurgerHome;
