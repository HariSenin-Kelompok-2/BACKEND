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
          id: "9130dde5-da6f-4ba7-916c-ae161fe7ee01",
          priceListId: "0030d395-1e25-4c76-a481-1e678876c331",
          UserId: "5194f115-92c4-405c-905e-a37aaee94ad4",
        },
        {
          id: "d2a156a7-ab32-4bd8-8f52-6bb71c23d6c7",
          priceListId: "f122d34b-bc15-4e54-a243-aa78aa43fa58",
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
