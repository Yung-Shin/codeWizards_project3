const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'superdupersecret';
const expiration = '2h';

module.exports = {
  authenticator: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log(data, "server/auth.js");
      req.user = data;
    } catch (e) {
      console.log(e);
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};