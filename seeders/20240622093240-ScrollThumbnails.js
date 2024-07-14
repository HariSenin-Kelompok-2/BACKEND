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
        // god of war
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256864004/movie480_vp9.webm?t=1639001817",
          productId: 1,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256852991/movie480_vp9.webm?t=1634742079",
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
        // satu product maks 7

        // elden ring
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256889456/movie480_vp9.webm?t=1654109241",
          productId: 2,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256864892/movie480_vp9.webm?t=1645830851",
          productId: 2,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_943bf6fe62352757d9070c1d33e50b92fe8539f1.600x338.jpg?t=1720627962",
          productId: 2,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_dcdac9e4b26ac0ee5248bfd2967d764fd00cdb42.600x338.jpg?t=1720627962",
          productId: 2,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.600x338.jpg?t=1720627962",
          productId: 2,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_e0316c76f8197405c1312d072b84331dd735d60b.600x338.jpg?t=1720627962",
          productId: 2,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/ss_ef61b771ee6b269b1f0cb484233e07a0bfb5f81b.600x338.jpg?t=1720627962",
          productId: 2,
          type: "img",
        },
        // 
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
