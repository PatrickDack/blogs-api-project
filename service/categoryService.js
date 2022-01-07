const { Category } = require('../models');

const create = async (obj) => {
  const newCategory = await Category.create(obj);

  return newCategory;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  create,
  getAll,
};
