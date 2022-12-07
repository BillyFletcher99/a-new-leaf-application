import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import auth from "../utils/auth";
import { ADD_PLANT } from "../utils/mutations";
import { getTocken } from "../utils/auth";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

const ShowPlant = () => {
  const { loading, data } = useQuery(getTocken);

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  console.log(data);
};
