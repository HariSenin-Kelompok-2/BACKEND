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
          productId: "99d1dbb7-d6fc-4e41-bc94-e8af61400f34",
        },
        {
          id: "f122d34b-bc15-4e54-a243-aa78aa43fa58",
          price: "Rp.8,9992",
          discount: 0,
          productId: "99d1dbb7-d6fc-4e41-bc94-e8af61400f34",
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
