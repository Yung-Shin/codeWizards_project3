const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'superdupersecret';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authenticator: function ({ req }) {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      const [scheme, credentials] = req.headers.authorization.split(' ');
      if (scheme === 'Bearer') {
        token = credentials.trim();
      }
    }

    if (token) {
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Invalid token');
      }
    }

    return req;
  },

  signToken: function ({ userName, email, _id }) {
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
