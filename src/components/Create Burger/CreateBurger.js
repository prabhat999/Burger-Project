import React, { useState } from "react";
import image2 from "./image.jpg";
import "./CreateBurger.css";
import { Alert, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { v1 as uuidv1 } from "uuid";

function CreateBurger(props) {
  const params = useParams();

  let initialBurger = params["id"]
    ? props.db.find((burger) => {
        if (burger.id === params["id"]) return burger;
      })
    : {
        id: uuidv1(),
        name: "",
        price: 30,
        category: "veg",
        toppings: "cucumber",
      };

  const [availableburgers, setavailableburgers] = useState([]);

  const [burger, setBurger] = useState(initialBurger);
  const [BurgerNameIsValid, setBurgerNameIsValid] = useState(true);
  const [show, setShow] = useState(false);

  const burgerNameChangeHandler = (event) => {
    setBurger({ ...burger, name: event.target.value });
    setBurgerNameIsValid(
      event.target.value.length > 3 || event.target.value.length === 0
    );
  };
  const radioChangeHandler = (event) => {
    setBurger({ ...burger, category: event.target.value });
  };
  const burgerPriceChangeHandler = (event) => {
    setBurger({ ...burger, price: event.target.value });
  };
  const toppingsChangeHandler = (event) => {
    setBurger({ ...burger, toppings: event.target.value });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setavailableburgers([...availableburgers, burger]);
    setShow(true);
    props.db.push({ ...burger, id: uuidv1() });
    console.log(props.db);
    setBurger(initialBurger);
  };

  const AlertDismissible = () => {
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Hurrah!</Alert.Heading>
          <p>Burger added successfully.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
      </>
    );
  };

  const handleEditBurger = (event) => {
    event.preventDefault();

    let index = props.db.findIndex((burger) => {
      return burger.id === params["id"];
    });

    props.db[index] = burger;
    setShow(true);
    setBurger(burger);
  };

  return (
    <div className="card">
      <img src={image2} height="100px" className="card-img-top" alt="Burger" />
      <div className="card-body">
        <form onSubmit={params["id"] ? handleEditBurger : formSubmitHandler}>
          <div className="form-group row">
            <label for="burgerName" className="col-sm-2 col-form-label">
              Enter Burger Name
            </label>
            <div className="col-sm-10">
              <input
                autoFocus
                type="text"
                className="form-control"
                id="burgerName"
                placeholder="Burger"
                required
                onChange={burgerNameChangeHandler}
                value={burger.name}
                autoComplete="off"
              />
            </div>
          </div>
          {!BurgerNameIsValid && (
            <p> *Burger name can't be less than 3 characters</p>
          )}
          <div className="form-group row">
            <label for="burgerPrice" className="col-sm-2 col-form-label">
              Enter Burger Price
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="burgerPrice"
                placeholder="Price"
                min={30}
                onChange={burgerPriceChangeHandler}
                value={burger.price}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="burgerPrice" className="col-sm-2 col-form-label">
              Select Toppings
            </label>
            <select
              id="burgerToppings"
              className="col-sm-10"
              onChange={toppingsChangeHandler}
            >
              <option
                selected={burger.toppings === "cucumber"}
                value="cucumber"
              >
                Cucumber
              </option>
              <option selected={burger.toppings === "tomato"} value="tomato">
                Tomato
              </option>
              <option selected={burger.toppings === "corn"} value="corn">
                Corn
              </option>
              <option
                selected={burger.toppings === "jalapeno"}
                value="jalapeno"
              >
                Jalapenos
              </option>
            </select>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Eater</legend>
              <div className="col-sm-10" onChange={radioChangeHandler}>
                <input
                  checked={burger.category === "veg"}
                  type="radio"
                  name="cate"
                  id=""
                  value="veg"
                />
                Veg
                <br />
                <input
                  checked={burger.category === "non-veg"}
                  type="radio"
                  name="cate"
                  id=""
                  value="non-veg"
                />
                Non-Veg
              </div>
            </div>
          </fieldset>

          <div className="form-group row">
            <div className="col-sm-10">
              <button
                id="submitbtn"
                type="submit"
                className="btn btn-primary"
                disabled={!BurgerNameIsValid}
              >
                Submit
              </button>
            </div>
          </div>
          <br />
          <AlertDismissible />
        </form>
      </div>
    </div>
  );
}

export default CreateBurger;
