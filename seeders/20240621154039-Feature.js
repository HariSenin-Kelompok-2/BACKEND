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
      "Features",
      [
        {
          id: "7c82a0d4-9662-4bfc-acce-54d5d2b19b30",
          name: "Single Player",
          icon: "singleplayer.png",
        },
        {
          id: "bfb471e5-acf6-4f19-80dd-9037dff57aaf",
          name: "Multi Player",
          icon: "multiplayer.png",
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
    await queryInterface.bulkDelete('Features', null, {});
  },
};
