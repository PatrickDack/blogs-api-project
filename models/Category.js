const Category = (sequelize, DataTypes) => {
  const category = sequelize.createTable('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
    uderScored: true,
  });

  return category;
};

module.exports = Category;
