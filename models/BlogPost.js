const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

  blogPost.assiciate = (model) => {
    blogPost.belongTo(model.User,
      { foreignKey: 'userId', as: 'users' });
  };
  return blogPost;
};

module.exports = BlogPost;
