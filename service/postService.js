const { BlogPost } = require('../models');
const { User, Category } = require('../models');

const create = async (obj) => {
  const { categoryIds, ...rest } = obj;
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

const update = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  return BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
};

const destroy = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
};
