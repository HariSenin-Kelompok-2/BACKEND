"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PriceList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PriceList.hasMany(models.Carts, { foreignKey: "priceListId" });
      PriceList.belongsTo(models.products);
    }
  }
  PriceList.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      offerName: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      discount: {
        allowNull: true,
        type: DataTypes.INTEGER(20),
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
      modelName: "PriceList",
    }
  );
  return PriceList;
};
