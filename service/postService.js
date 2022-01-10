const { BlogPost } = require('../models');
const { User, Category } = require('../models');

const create = async (obj) => {
  const { categoryIds, ...rest } = obj;
  console.log(rest);
  const newPost = await BlogPost.create(rest);

  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return ({
      code: 404,
      message: 'Post does not exist',
    });
  }

  return post;
};

module.exports = {
  create,
  getAll,
  getById,
};
