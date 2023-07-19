const { User } = require('../models');

const resolvers = {
  // get method to retrieve all users from the database
  Query: {

  },
  // POST PUT DELETE methods to create, update, and delete a user
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

  },
};

module.exports = resolvers;
