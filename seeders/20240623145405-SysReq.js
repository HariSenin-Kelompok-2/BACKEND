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
    await queryInterface.bulkInsert('SysReqs', [{
    id: crypto.randomUUID(),
    productId: crypto.randomUUID(),
    recommended: true,
    osId: crypto.randomUUID(),
    processor: "I5-10400F",
    memory: "8GB",
    graphics: "RTX 3090",
    directW: "16GB",
    storage: "512GB",
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
