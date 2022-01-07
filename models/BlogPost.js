module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
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

  // BlogPost.associate = (models) => {
  //   BlogPost.belongsTo(models.User,
  //     { foreignKey: 'userId', as: 'posts' });
  // };

  return BlogPost;
};
