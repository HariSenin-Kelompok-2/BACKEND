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
          UserId: "b2c8d9b5-64a1-4688-a4f6-fd2eadb0c52e",
        },
        {
          priceListId: 2,
          UserId: "b2c8d9b5-64a1-4688-a4f6-fd2eadb0c52e ",
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
