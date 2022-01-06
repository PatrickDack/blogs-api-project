const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    Image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
    uderScored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'blogPosts' });
  };

  return user;
};

module.exports = User;
