const { User } = require('../models');
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
// GET methods to get all users, get a single user by username, and get a logged in user by id
  Query: {
// get all users
    users: async ( ) => {
      return User.find()},

// get a single user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })},
  },


// POST PUT DELETE methods to create, update, and delete a user
  Mutation: {
    createUser: async (parent, { firstName, lastName, userName, password, email,}) => {
    try {
      const user = await User.create({
        firstName,
        lastName,
        userName,
        password,
        email,
      });
      // signs a token for authentication, and returns the token and user.
      const token = signToken(user);
      return { token, user };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create a user');
    }
    },
// get a logged in user by username
    login: async (parent, { userName }) => {
      const user = await User.findOne({ userName });
  
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
  
      const token = signToken(user);
      return { token, user };
    },    
  },
};

 
module.exports = resolvers;
