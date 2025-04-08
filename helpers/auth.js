const jwt = require("jsonwebtoken");

exports.generateToken = ({ expiresIn, payload, secret }) =>
  jwt.sign(payload, secret, { expiresIn });
