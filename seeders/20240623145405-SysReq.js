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
    productId: "ec4b27fa-408b-4f2c-9e51-d842bcb9f148",
    recommended: true,
    osId: "26c12d55-a15b-46e9-838d-68210a708213",
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
