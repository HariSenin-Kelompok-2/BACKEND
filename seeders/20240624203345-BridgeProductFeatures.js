'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("BridgeProductFeatures", [
      {
        featureId: "7c82a0d4-9662-4bfc-acce-54d5d2b19b30",
        productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
      },
      {
        featureId: "bfb471e5-acf6-4f19-80dd-9037dff57aaf",
        productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('BridgeProductFeatures', null, {});
  }
};
