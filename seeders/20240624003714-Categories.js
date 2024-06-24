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
      "Categories",
      [
        {
          id: "68e87fe5-ac33-4cdd-95e4-2b7c2fb2c0af",
          name: "Open World",
        },
        {
          id: "4c37e882-3aab-4411-b6e0-8337f9be6924",
          name: "RPG",
        },
        {
          id: "9a04c47f-7f8e-423a-a97f-4601bc5c2bab",
          name: "Action",
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
