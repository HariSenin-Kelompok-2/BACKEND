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
        productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
        categoryId: "9a04c47f-7f8e-423a-a97f-4601bc5c2bab",
      },
      {
        productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        categoryId: "68e87fe5-ac33-4cdd-95e4-2b7c2fb2c0af",
      },
      {
        productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        categoryId: "4c37e882-3aab-4411-b6e0-8337f9be6924",
      },
      {
        productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        categoryId: "9a04c47f-7f8e-423a-a97f-4601bc5c2bab",
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
