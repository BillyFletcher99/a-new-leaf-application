const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    plants: [Plant!]
  }

  type Plant {
    _id: ID!
    owner: User!
    birthDate: String
    nickname: String
    species: Species
  }

  type SpeciesInput {
    common_names: String
    scientific_name: String
    synonyms: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    plant(_id: ID!): Plant
    species(SpeciesInput): Species
    moreSpecies(SpeciesInput): [Species]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Species {
    _id: ID!
    common_names: String
    family: String
    family_common_name: String
    gbif: String
    plantnet: String
    powo: String
    scientific_name: String
    synonyms: String
    usda: String
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addPlant(nickname: String!, birthDate: String!, species: String!): Plant
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
