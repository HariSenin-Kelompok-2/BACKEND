"use strict";

const hashPassword = require("../services/hashPassword");

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
      "Users",
      [
        {
          id: "5194f115-92c4-405c-905e-a37aaee94ad4",
          username: "JohnDoe",
          email: "johndoe@example.com",
          regionId: 1,
          password: await hashPassword("password"),
        },
        {
          id: "cc75df37-ce40-4395-ae31-0a7e982cf68e",
          username: "JohnCena",
          email: "johncena@example.com",
          regionId: 1,
          password: await hashPassword("password"),
        },
        {
          id: "b2c8d9b5-64a1-4688-a4f6-fd2eadb0c52e",
          username: "JamesBond",
          email: "jamesbond@example.com",
          regionId: 2,
          password: await hashPassword("password"),
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
