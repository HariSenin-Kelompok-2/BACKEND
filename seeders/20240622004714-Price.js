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
      "Prices",
      [
        {
          id: crypto.randomUUID(),
          price: "10",

          discount: 10,
          productId: "fa723e40-db02-46d4-84de-48d35b17be62",
        },
        {
          id: crypto.randomUUID(),
          price: "20",
          discount: 0,
          productId: "fa723e40-db02-46d4-84de-48d35b17be62",
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
  },
};
