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
          id: "8459da6e-89a1-4931-a05a-2303ad43c532",
          name: "Apex Legends",
          price: "IDR. 0",
          short_description: "waw",
          release_date:"kapan-kapan",
          description: "waw keren",
          developer: "dev1",
          publisher: "publisher1",
          product_thumbnail: "gambar keren",
          video: "dangdutan"

        },
        {
          id: "fa02177d-bd6a-4de5-a2ac-08a50942d805",
          name: "Elden Ring",
          price: "IDR. 599.999",
          short_description: "waw2",
          release_date:"kapan-kapan2",
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
