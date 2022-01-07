const { Category } = require('../models');

const create = async (obj) => {
  const newCategory = await Category.create(obj);

  return newCategory;
};

module.exports = {
  create,
};
