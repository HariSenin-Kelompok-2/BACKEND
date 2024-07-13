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
        {
          name: "The First Descendant",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/header.jpg?t=1719986463",
          video: "dangdutan2",
        },
        {
          name: "HELLDIVERS 2",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg?t=1717621025",
          video: "dangdutan2",
        },
        {
          name: "Anger Foot",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/header.jpg?t=1720791250",
          video: "dangdutan2",
        },
        {
          name: "Exoprimal",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/header.jpg?t=1720747059",
          video: "dangdutan2",
        },
        {
          name: "Sea of Thieves: 2024 Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1720175247",
          video: "dangdutan2",
        },
        {
          name: "Far Cry 6",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher2",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg?t=1706823201",
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
