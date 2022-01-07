const { User } = require('../models');

const create = async (obj) => {
  const newUser = await User.create(obj);

  return newUser;
};

module.exports = {
  create,
};
