const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: 'customer',
      },
    },
    {
      timestamps: false,
      tableName: 'users',
    },
  );

  return user;
};

module.exports = User;
