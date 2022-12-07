import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import auth from "../utils/auth";
import { ADD_PLANT } from "../utils/mutations";
import { getTocken } from "../utils/auth";
import { Jumbotron, Container, CardColumns, Card } from "react-bootstrap";

const ShowPlant = () => {
  const { loading, data } = useQuery(getTocken);

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  console.log(data);

  return (
    <CardColumns>
      {userData.savedPlant.map((plant) => {
        return (
          <Card key={plant.plantId} border="dark">
            {plant.image ? <Card.Img src={plant.image} /> : null}
            <Card.Body>
              <Card.Title>{plant.nickname}</Card.Title>
              <p className="small">Birthdate: {plant.birthDay}</p>
            </Card.Body>
          </Card>
        );
      })}
    </CardColumns>
  );
};
