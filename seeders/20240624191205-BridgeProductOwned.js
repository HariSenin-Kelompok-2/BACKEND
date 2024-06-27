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
        productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
        userId: "5194f115-92c4-405c-905e-a37aaee94ad4",
      },
      {
        productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        userId: "5194f115-92c4-405c-905e-a37aaee94ad4",
      },
      {
        productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        userId: "cc75df37-ce40-4395-ae31-0a7e982cf68e",
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
    await queryInterface.bulkDelete('BridgeProductOwneds', null, {});
  }
};
