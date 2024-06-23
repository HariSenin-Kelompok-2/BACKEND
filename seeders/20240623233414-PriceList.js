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
      "PriceLists",
      [
        {
          id: crypto.randomUUID(),
          price: "Rp.8,999",

          discount: 10,
          productId: "96a1af29-4466-40f3-8350-9b12b03acf7c",
        },
        {
          id: crypto.randomUUID(),
          price: "Rp.8,9992",
          discount: 0,
          productId: "a891009e-3e47-468e-b7b8-52dcfd0a2e66",
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
