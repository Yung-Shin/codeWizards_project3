const express = require("express");
const path = require("path");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
// import graphQl schemas and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authenticator } = require("./utils/auth");
const { User } = require("./models");
// database connection
const connection = require("./config/connection");
const routes = require("./routes");

// ----- imports requires-------

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authenticator, // Use the authenticatr middleware to check for authentication
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// use routes
app.use(routes);

// Create route for the root URL.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, userName, password, email } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      userName,
      password,
      email,
    });
    const token = signToken(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
});

app.post('/api/login', async (req, res) => { // <-- Change "req" to "res" here
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user || !user.isCorrectPassword(password)) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }
    const token = signToken(user); // <-- Fix the variable name from "toekn" to "token"
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});


app.delete("/api/some_data/:id", (req, res) => {
  // DELETE request logic
  // For example, delete data from the database based on the request parameter (id)
  // delete account or user etc.
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  connection.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
