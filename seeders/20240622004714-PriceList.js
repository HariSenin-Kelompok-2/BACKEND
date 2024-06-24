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
          id: "0030d395-1e25-4c76-a481-1e678876c331",
          price: "Rp.8,999",
          discount: 10,
          productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
        },
        {
          id: "f122d34b-bc15-4e54-a243-aa78aa43fa58",
          price: "Rp.8,9992",
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
  },
};
