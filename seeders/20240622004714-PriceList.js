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
          offerName: "",
          price: "599000",
          discount: 0,
          productId: 2,
        },
        {
          offerName: "",
          price: "729000",
          discount: 0,
          productId: 1,
        },
        {
          offerName: "Deluxe Edition",
          price: "1029000",
          discount: 0,
          productId: 1,
        },
        {
          offerName: "Premium Edition",
          price: "1059000",
          discount: 0,
          productId: 1,
        },
        {
          offerName: "",
          price: "699000",
          discount: 0,
          productId: 3,
        },
        {
          offerName: "Premium Edition",
          price: "699000",
          discount: 0,
          productId: 3,
        },
        {
          offerName: "",
          price: "899000",
          discount: 0,
          productId: 4,
        },
        {
          offerName: "",
          price: "999000",
          discount: 0,
          productId: 5,
        },
        {
          offerName: "",
          price: "59000",
          discount: 0,
          productId: 6,
        },
        {
          offerName: "",
          price: "79000",
          discount: 0,
          productId: 7,
        },
        {
          offerName: "",
          price: "39000",
          discount: 0,
          productId: 8,
        },
        {
          offerName: "",
          price: "29000",
          discount: 0,
          productId: 9,
        },
        {
          offerName: "",
          price: "49000",
          discount: 0,
          productId: 10,
        },
        {
          offerName: "",
          price: "69000",
          discount: 0,
          productId: 11,
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
