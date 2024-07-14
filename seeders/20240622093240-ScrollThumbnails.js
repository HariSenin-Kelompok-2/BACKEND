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
    Example: await queryInterface.bulkInsert(
      "ScrollThumbnails",
      [
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256864004/movie480_vp9.webm?t=1639001817",
          productId: 1,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.600x338.jpg?t=1720454875",
          productId: 1,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.600x338.jpg?t=1720454875",
          productId: 1,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.600x338.jpg?t=1720454875",
          productId: 1,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_93a3ca63aa2cd8c675bbb6430324ee3f2d44b845.600x338.jpg?t=1720454875",
          productId: 1,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/ss_1bd99270dcbd4ff9fe9c94b0d9c8ffc50ebb42c7.600x338.jpg?t=1720454875",
          productId: 1,
          type: "img",
        }, // berhenti di pic 4 gow
        {
          img: "zzz",
          productId: 2,
          type: "img",
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
    await queryInterface.bulkDelete("ScrollThumbnails", null, {});
  },
};
