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
    userId: ID!
  }

  type SpinResult {
    winningName: String!
    won: Boolean!

  }
  type Query {
    users: [User]
    user(userName: String): User
    me: User
    roulettes: [Roulette]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, userName: String!, password: String!, email: String!): Auth
    login(userName: String!, password: String!): Auth
    createRoulette(winningName: String!, winningChance: Float!): Roulette # New mutation to create a Roulette
  }
`;

module.exports = typeDefs;
