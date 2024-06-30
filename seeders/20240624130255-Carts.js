"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          priceListId: 1,
          UserId: "5194f115-92c4-405c-905e-a37aaee94ad4",
        },
        {
          priceListId: 2,
          UserId: "5194f115-92c4-405c-905e-a37aaee94ad4",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
