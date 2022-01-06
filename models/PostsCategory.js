const PostsCategory = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {},
  { timestamps: false });

  postsCategory.associate = (model) => {
    model.BlogPost.hasMany(model.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    model.Category.hasMany(model.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postsCategory;
};

module.exports = PostsCategory;