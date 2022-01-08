const { BlogPost } = require('../models');

const create = async (obj) => {
  const { categoryIds, ...rest } = obj;
  console.log(rest);
  const newPost = await BlogPost.create(rest);

  return newPost;
};

module.exports = {
  create,
};
