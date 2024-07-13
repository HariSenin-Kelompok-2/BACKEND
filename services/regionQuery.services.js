const { Region } = require("../models");

const getRegionWhere = async (columnObject) => {
  return await Region.findOne({
    where: {
      ...columnObject,
    },
  });
};

const getAllRegions = async () => {
  return await Region.findAll({
    attributes: ["name"],
  });
};

module.exports = { getRegionWhere, getAllRegions };
