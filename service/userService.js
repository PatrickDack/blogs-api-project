const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = '123';

const jwtConfig = {
  expiresIn: '10m',
  algorithm: 'HS256',
};

const create = async (obj) => {
  const newUser = await User.create(obj);

  const token = jwt.sign({ data: newUser }, SECRET, jwtConfig);

  return token;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  create,
  getAll,
};
