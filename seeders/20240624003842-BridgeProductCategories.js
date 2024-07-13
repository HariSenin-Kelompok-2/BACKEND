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
    await queryInterface.bulkInsert("BridgeProductCategories", [
      {
        productId: 1,
        categoryId: 1,
      },
      {
        productId: 2,
        categoryId: 1,
      },
      {
        productId: 1,
        categoryId: 2,
      },
      {
        productId: 1,
        categoryId: 3,
      },
      {
        productId: 2,
        categoryId: 3,
      },
      {
        productId: 6,
        categoryId: 3,
      },
      {
        productId: 7,
        categoryId: 3,
      },
      {
        productId: 8,
        categoryId: 3,
      },
      {
        productId: 9,
        categoryId: 3,
      },
      {
        productId: 10,
        categoryId: 3,
      },
      {
        productId: 11,
        categoryId: 3,
      },
      {
        productId: 12,
        categoryId: 1,
      },
      {
        productId: 13,
        categoryId: 1,
      },
      {
        productId: 14,
        categoryId: 1,
      },
      {
        productId: 15,
        categoryId: 1,
      },
      {
        productId: 16,
        categoryId: 1,
      },
      {
        productId: 17,
        categoryId: 1,
      },
      {
        productId: 18,
        categoryId: 1,
      },
      {
        productId: 19,
        categoryId: 1,
      },
      {
        productId: 20,
        categoryId: 1,
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
    await queryInterface.bulkDelete('BridgeProductCategories', null, {});
  }
};
