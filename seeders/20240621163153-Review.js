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
    await queryInterface.bulkInsert('Reviews', [{
      id: crypto.randomUUID(),
      content: 'baguss sekali',
      isRecommend: true,
      userId:"9cc44fcd-159b-43a1-8af8-6ee9ef6b4e73",
      productId: "9cc44fcd-159b-43a1-8af8-6ee9ef6b4e75",
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
