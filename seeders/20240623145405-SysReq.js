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
      "SysReqs",
      [
        {
          id: crypto.randomUUID(),
          productId: "8459da6e-89a1-4931-a05a-2303ad43c532",
          recommended: true,
          osId: "3c437996-a1eb-43c3-8872-6c0007379f1b",
          processor: "I5-10400F",
          memory: "8GB",
          graphics: "RTX 3090",
          directW: "16GB",
          storage: "512GB",
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
