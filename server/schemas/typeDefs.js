// import necessary packages
const { gql } = require('apollo-server-express');

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

type Query {
    users: [User]
    user(userName: String): User
    me: User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, userName: String!, password: String!, email: String!): Auth
    login(userName: String!, password: String!): Auth
  }
`;


module.exports = typeDefs;