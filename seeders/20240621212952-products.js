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
      "products",
      [
        {
          name: "God Of War",
          short_description: "waw",
          // release_date:"kapan-kapan",
          description: "waw keren",
          developer: "dev1",
          publisher: "publisher1",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1720454875",
          video: "dangdutan",
        },
        {
          name: "Elden Ring",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header_alt_assets_2.jpg?t=1720627962",
          video: "dangdutan2",
        },
        {
          name: "Forza Horizon 5 - Standard Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher3",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1718730250",
          video: "dangdutan2",
        },
        {
          name: "Forza Horizon 5 - Deluxe Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher3",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1718730250",
          video: "dangdutan2",
        },
        {
          name: "Forza Horizon 5 - Premium Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher3",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1718730250",
          video: "dangdutan2",
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
    await queryInterface.bulkDelete("products", null, {});
  },
};
