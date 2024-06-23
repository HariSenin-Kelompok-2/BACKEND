"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SysReqs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SysReqs.belongsTo(models.products),
      SysReqs.belongsTo(models.CategorySysReq)
    }
  }
  SysReqs.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    productId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    recommended: {
      allowNull: false,
      type: DataTypes.STRING, 
    },
    osId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    processor: {
      allowNull: false,
      type: DataTypes.STRING
    },
    memory: {
      allowNull: false,
      type: DataTypes.STRING
    },
    graphics: {
      allowNull: false,
      type: DataTypes.STRING
    },
    directW: {
      allowNull: true,
      type: DataTypes.STRING
    },
    storage: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: "SysReq",
  }
);
return SysReq;
};   
