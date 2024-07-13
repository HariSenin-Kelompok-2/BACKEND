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
      "pricelists",
      [
        {
          price: "599000",
          discount: 0,
          productId: 2,
        },
        {
          price: "729000",
          discount: 0,
          productId: 1,
        },
        {
          price: "699000",
          discount: 0,
          productId: 3,
        },
        {
          price: "899000",
          discount: 0,
          productId: 4,
        },
        {
          price: "999000",
          discount: 0,
          productId: 5,
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
