// Import necessary packages
const { gql } = require('apollo-server-express');

// Define the GraphQL schema using GraphQL SDL (Schema Definition Language)
const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    password: String! 
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Roulette {
    _id: ID!
    winningName: String!
    winningChance: Float!
    userId: ID! # NOTE: You may need to adjust the data type based on your user model setup.
  }

  type Query {
    users: [User]
    user(userName: String): User
    me: User # NOTE: This resolver is not implemented yet. You may need to define it later.
    roulettes: [Roulette] # New query to get all Roulettes
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, userName: String!, password: String!, email: String!): Auth
    login(userName: String!, password: String!): Auth
    createRoulette(winningName: String!, winningChance: Float!): Roulette # New mutation to create a Roulette
  }
`;

module.exports = typeDefs;
