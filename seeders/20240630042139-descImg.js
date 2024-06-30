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
    Example: await queryInterface.bulkInsert(
      "descImgs",
        [
          {
            img: "21e1q23c9ur9c824035u903c4.png",
            productId: 1,
          },
          {
            img: "wadawdqwedr123r23fasefwef3r9.png",
            productId: 1,
          },
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ScrollThumbnails', null, {});
  },
};
