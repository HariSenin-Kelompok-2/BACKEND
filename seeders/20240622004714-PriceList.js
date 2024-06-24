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
          id: crypto.randomUUID(),
          price: "Rp.8,999",

          discount: 10,
          productId: "99d1dbb7-d6fc-4e41-bc94-e8af61400f34",
        },
        {
          id: crypto.randomUUID(),
          price: "Rp.8,9992",
          discount: 0,
          productId: "d35467b8-7fb8-46fc-af66-116dfba11581",
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
