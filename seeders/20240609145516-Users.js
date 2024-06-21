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

    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        id: crypto.randomUUID(),
        username: "DUMMY NAME " + i,
        email: "dummyemail" + i + "@example.com",
        regionId: "9cc44fcd-159b-43a1-8af8-6ee9ef6b4e73",
        password: "DUMMYPASSWORD",
      });
    }

    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
