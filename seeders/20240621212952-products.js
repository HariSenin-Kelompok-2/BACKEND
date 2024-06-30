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
      "products",
      [
        {
          name: "Apex Legends",
          short_description: "waw",
          // release_date:"kapan-kapan",
          description: "waw keren",
          developer: "dev1",
          publisher: "publisher1",
          product_thumbnail: "gambar keren",
          video: "dangdutan"
        },
        {
          name: "Elden Ring",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail: "gambar keren2",
          video: "dangdutan2"
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
