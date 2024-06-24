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
          id: "2f5a0f24-7c1e-4dda-84bd-f4fef0222f2f",
          price: "10",
          discount: 10,
          productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
        },
        {
          id: "46d9161c-1369-4d9f-be38-167335f58b4a",
          price: "20",
          discount: 0,
          productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
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
    await queryInterface.bulkDelete('Prices', null, {});
  },
};
