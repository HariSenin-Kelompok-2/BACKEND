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
    Example: await queryInterface.bulkInsert(
      "ScrollThumbnails",
      [
        {
          id: crypto.randomUUID(),
          img: "example.png",
          productId: "ec4b27fa-408b-4f2c-9e51-d842bcb9f148",
        },
        {
          id: crypto.randomUUID(),
          img: "example2.png",
          productId: "ec4b27fa-408b-4f2c-9e51-d842bcb9f148",
        },
        {
          id: crypto.randomUUID(),
          img: "example3.png",
          productId: "ec4b27fa-408b-4f2c-9e51-d842bcb9f148",
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

