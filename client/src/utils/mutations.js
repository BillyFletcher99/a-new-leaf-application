import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PLANT = gql`
  mutation addPlant($nickname: String!, $birthDate: String!, $species: String) {
    addPlant(nickname: $nickname, birthDate: $birthDate, species: $species) {
      plant {
        _id
      }
    }
  }
`;
