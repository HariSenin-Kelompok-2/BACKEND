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
      "Regions",
      [
        {
          id: "b6f70246-6ac3-46f9-969c-be101be68a56",
          name: "Indonesia",
        },
        {
          id: "55e8eb78-d6e4-4e1c-94cc-0f6fc898664a",
          name: "Vietnam",
        },
        {
          id: "78cb05f7-1045-4fab-b936-f8c7f0e74c9f",
          name: "China",
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
    await queryInterface.bulkDelete('Regions', null, {});
  },
};
