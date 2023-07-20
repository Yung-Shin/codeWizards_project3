// importing required packages
const express = require('express');
const path = require('path');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import graphQl schemas and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authenticator } = require('./utils/auth');

// database connection
const connection = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create route for the root URL.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  

  startApolloServer();
 
