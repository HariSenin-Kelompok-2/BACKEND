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
    await queryInterface.bulkInsert("BridgeProductOwneds", [
      {
        productId: 1,
        userId: "5194f115-92c4-405c-905e-a37aaee94ad4",
      },
      {
        productId: 2,
        userId: "5194f115-92c4-405c-905e-a37aaee94ad4",
      },
      {
        productId: 2,
        userId: "cc75df37-ce40-4395-ae31-0a7e982cf68e",
      },
      {
        productId: 2,
        userId: "b2c8d9b5-64a1-4688-a4f6-fd2eadb0c52e",
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('BridgeProductOwneds', null, {});
  }
};
