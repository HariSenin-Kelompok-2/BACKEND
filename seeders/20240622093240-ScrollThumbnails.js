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
          productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        },
        {
          id: crypto.randomUUID(),
          img: "example2.png",
          productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
        },
        {
          id: crypto.randomUUID(),
          img: "example3.png",
          productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
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
    await queryInterface.bulkDelete('ScrollThumbnails', null, {});
  },
};

