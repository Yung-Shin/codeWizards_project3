const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'superdupersecret';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authenticator: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ userName, email, _id }) {
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
