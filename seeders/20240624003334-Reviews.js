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
          id: crypto.randomUUID(),
          content: "baguss sekali",
          isRecommend: true,
          userId: "b2c8d9b5-64a1-4688-a4f6-fd2eadb0c52e",
          productId: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
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
