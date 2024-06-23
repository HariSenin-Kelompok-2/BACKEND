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
          productId: "216329dc-3a36-4927-870f-3fd513b12d6b",
        },
        {
          id: crypto.randomUUID(),
          price: "20",
          discount: 0,
          productId: "8201758f-b3f3-456b-808d-440b25adac23",
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
