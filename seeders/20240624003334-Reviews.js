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
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          content: "baguss sekali",
          isRecommend: true,
          userId: "b2c8d9b5-64a1-4688-a4f6-fd2eadb0c52e",
          productId: 1,
        },
        {
          content: "bagus cuyy",
          isRecommend: true,
          userId: "5194f115-92c4-405c-905e-a37aaee94ad4",
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
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
