"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Price.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      discount: {
        allowNull: true,
        type: DataTypes.INTEGER(20),
      },
      product_id: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Price",
    }
  );
  return Price;
};
