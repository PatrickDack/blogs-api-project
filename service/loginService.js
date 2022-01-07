const jwt = require('jsonwebtoken');
const { pattern, response } = require('./helpers/validate');
const { User } = require('../models');

const SECRET = '123';

const jwtConfig = {
  expiresIn: '10m',
  algorithm: 'HS256',
};

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return response(pattern.BAD_REQUEST, pattern.INVALID_FIELD);
  }

  const token = jwt.sign({ data: user }, SECRET, jwtConfig);

  return token;
};