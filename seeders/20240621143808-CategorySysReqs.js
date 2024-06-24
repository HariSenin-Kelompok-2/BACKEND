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
      "CategorySysReqs",
      [
        {
          id: "3c437996-a1eb-43c3-8872-6c0007379f1b",
          osName: "Windows",
        },
        {
          id: "127fa328-c7b4-495d-949a-fddf7c38ae51",
          osName: "MacOS",
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
    await queryInterface.bulkDelete('CategorySysReqs', null, {});
  },
};
