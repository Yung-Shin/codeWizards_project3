const { User } = require('../models');
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  // Query resolvers to fetch data
  Query: {
    // Resolver to get all users
    users: async () => {
      try {
        // Retrieve all users from the database using the User model
        const users = await User.find();
        return users;
      } catch (error) {
        // If there's an error during the database query, log the error and throw a custom error message
        console.error(error);
        throw new Error('Failed to fetch users');
      }
    },

    // Resolver to get a single user by username
    user: async (parent, { username }) => {
      try {
        // Find a user in the database with the provided username using the User model
        const user = await User.findOne({ username });
        return user;
      } catch (error) {
        // If there's an error during the database query, log the error and throw a custom error message
        console.error(error);
        throw new Error('Failed to fetch user by username');
      }
    },
  },

  // Mutation resolvers to modify data
  Mutation: {
    // Resolver to create a new user
    createUser: async (parent, { firstName, lastName, userName, password, email }) => {
      try {
        // Create a new user document in the database with the provided data using the User model
        const user = await User.create({
          firstName,
          lastName,
          userName,
          password,
          email,
        });

        // Sign a token for authentication, using the user data, and return the token and user
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        // If there's an error during the creation process, log the error and throw a custom error message
        console.error(error);
        throw new Error('Failed to create a user');
      }
    },

    // Resolver to handle user login
    login: async (parent, { userName }) => {
      try {
        // Find a user in the database with the provided username using the User model
        const user = await User.findOne({ userName });

        if (!user) {
          // If the user is not found, throw an AuthenticationError
          throw new AuthenticationError("No user found with this username");
        }

        // Sign a token for authentication, using the user data, and return the token and user
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        // If there's an error during the database query or token signing, log the error and throw a custom error message
        console.error(error);
        throw new Error('Failed to perform user login');
      }
    },
  },
};

// Export the resolvers
module.exports = resolvers;
