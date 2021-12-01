import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
function DeleteBurger(props) {
  const params = useParams();

  useEffect(() => {
    let id = params["id"];

    props.setBurgers(props.db.filter((burger) => burger.id != id));
  }, []);

  return <>{<h1>Item with bid: {params["id"]},Deleted Successfully</h1>}</>;
}

export default DeleteBurger;
