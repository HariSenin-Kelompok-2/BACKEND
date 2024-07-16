"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.hasMany(models.ScrollThumbnail);
      products.belongsToMany(models.Category, { through: "BridgeProductCategory" });
      products.belongsToMany(models.Users, { through: "BridgeProductOwned", as: "productOwned" });
      products.belongsToMany(models.Feature, { through: "BridgeProductFeatures", as: "productFeatures" });
      products.hasOne(models.SysReqs);
      products.hasMany(models.PriceList);
      products.hasMany(models.Review);
      products.hasMany(models.descImg)
    }
  }
  products.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      short_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.DATE
      },
      developer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_thumbnail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      video: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      jumbotron_image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
