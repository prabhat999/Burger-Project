import React from "react";
import { ListGroup, Card, ListGroupItem } from "react-bootstrap";
import "./ViewBurgerList.css";
import img from "./image2.png";
import { Link } from "react-router-dom";

function ViewBurgerList(props) {
  const deleteHandler = (id) => {
    props.setBurgers(props.db.filter((burger) => burger.id != id));
  };

  console.log(props.db);
  return (
    <div className="main">
      <h1 className="text-center">Burger Lisiting</h1>
      <div className="row">
        {props.db.map((burger, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <h3>{index + 1}</h3>
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "200px", width: "100%" }}
            />
            <Card.Body>
              <Card.Title>{burger.name}</Card.Title>
              <Card.Text id="descr">See Burger Details below</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Price:{burger.price}</ListGroupItem>
            </ListGroup>

            <Link className="btn1" to={`/editburger/${burger.id}`}>
              Edit
            </Link>

            <Link className="btn1" to={`/deleteburger/${burger.id}`}>
              Delete
            </Link>

            {/* <button onClick={(e) => deleteHandler(burger.id)}>Delete</button> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewBurgerList;
