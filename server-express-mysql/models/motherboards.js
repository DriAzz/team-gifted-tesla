/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motherboards', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    manuafracture: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'motherboards'
  });
};
