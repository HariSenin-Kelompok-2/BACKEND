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

        // The First Descendant
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257031929/movie480_vp9.webm?t=1719396909",
          productId: 6,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257033370/movie480_vp9.webm?t=1719396915",
          productId: 6,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/ss_72b515ee7afdcd2d95b142ee1a706fd71d74552d.600x338.jpg?t=1719986463",
          productId: 6,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/ss_a502e524f9a0e9142ffb38638cb867a7cb448147.600x338.jpg?t=1719986463",
          productId: 6,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/ss_6476e1c79bcd7f8e87c33eb397fc67b091cfbf6f.600x338.jpg?t=1719986463",
          productId: 6,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/ss_4e38598cbb671cd1e90da0eaf5f2b8f315d1d513.600x338.jpg?t=1719986463",
          productId: 6,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/ss_b55b78b901985900ef0bba95288f5fd314c1751f.600x338.jpg?t=1719986463",
          productId: 6,
          type: "img",
        },

        // HELLDIVERS™ 2
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256994373/movie480_vp9.webm?t=1705428404",
          productId: 7,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256992403/movie480_vp9.webm?t=1704816615",
          productId: 7,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.600x338.jpg?t=1717621025",
          productId: 7,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_33e684e9cb2517af1599f0ca2b57d65ee82c2e51.600x338.jpg?t=1717621025",
          productId: 7,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_8949ed7dd24a02d5ea13b08fc5c04fab400dc4bd.600x338.jpg?t=1717621025",
          productId: 7,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_50afbbc4d811c38fe9f64c1fc8d7eb9d9da6d24c.1920x1080.jpg?t=1717621025",
          productId: 7,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/ss_cb276fe9f0b09683bdbc496f82b405dbe0ffa1f1.600x338.jpg?t=1717621025",
          productId: 7,
          type: "img",
        },

        // Anger Foot
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257036936/movie480_vp9.webm?t=1720718148",
          productId: 8,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257028858/movie480_vp9.webm?t=1720718153",
          productId: 8,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/ss_6ca80dd86ee1f4d4f395f0f14a74d0eb00cbb7b3.600x338.jpg?t=1720791250",
          productId: 8,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/ss_e68f57c04fe7640837981077e0d045b6816e61e1.600x338.jpg?t=1720791250",
          productId: 8,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/ss_c63267ba4546435ea30471bce8bfc4057643e4c6.600x338.jpg?t=1720791250",
          productId: 8,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/ss_e934f4b47f429770628c5b3aa5d47eeeb7cf8fa1.600x338.jpg?t=1720791250",
          productId: 8,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/ss_cb8021df9b54506827e615546918b685a4d95822.600x338.jpg?t=1720791250",
          productId: 8,
          type: "img",
        },
        // Exoprimal
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256959569/movie480_vp9.webm?t=1690164923",
          productId: 9,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256954689/movie480_vp9.webm?t=1687500285",
          productId: 9,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/ss_dcba3dc9938cd9a284aa0449a1e69c8d7f5dbf0a.600x338.jpg?t=1720747059",
          productId: 9,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/ss_b2774d87e655fdf3dda7bfb3bcd2fb7e302e5b3e.600x338.jpg?t=1720747059",
          productId: 9,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/ss_39e42325843fbb3fc015012ca27fd6abad1f137f.600x338.jpg?t=1720747059",
          productId: 9,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/ss_04051b9b59e09d3cc8e22844e4eb52ef927a1c82.600x338.jpg?t=1720747059",
          productId: 9,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/ss_e86abd66a1098f48451d0659216b16c2a75f1b84.600x338.jpg?t=1720747059",
          productId: 9,
          type: "img",
        },

        // Sea of Thieves: 2024 Edition
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257019754/movie480_vp9.webm?t=1714482544",
          productId: 10,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257019591/movie480_vp9.webm?t=1714482549",
          productId: 10,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_ec623c77d75dfa098c622b547b1ab21ad4cae0a8.600x338.jpg?t=1720175247",
          productId: 10,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_6ea04bdc415c336a195555aec4b97a73a9910fc1.600x338.jpg?t=1720175247",
          productId: 10,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_2144ac860fd64d82cb9cc49680f5087c7bb8fe2f.600x338.jpg?t=1720175247",
          productId: 10,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_4fb90cbac34d2cbe74b86383bda660cd0316b907.600x338.jpg?t=1720175247",
          productId: 10,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/ss_eb726e31966c9dae0bf0c6cc66ef2fc41b241233.600x338.jpg?t=1720175247",
          productId: 10,
          type: "img",
        },

        // Far Cry 6
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256941289/movie480_vp9.webm?t=1682096985",
          productId: 11,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256941287/movie480_vp9.webm?t=1682097001",
          productId: 11,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_195eb286dad05d3b9e56f22eafacce7efe9c9ebf.600x338.jpg?t=1706823201",
          productId: 11,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_65c6467467795423bb959aa2c76ad2659f6553cd.600x338.jpg?t=1706823201",
          productId: 11,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_b0fa07116df319216ac4a4e7855a4c4a1d224bd0.600x338.jpg?t=1706823201",
          productId: 11,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_8bf4118728c0df8340c665329b78e428ed0a7c9f.600x338.jpg?t=1706823201",
          productId: 11,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/ss_d3b78bb05886f9961869b03701f5920537e0decc.600x338.jpg?t=1706823201",
          productId: 11,
          type: "img",
        },

        // Once Human
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256998828/movie480_vp9.webm?t=1707101835",
          productId: 12,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/ss_bab7e8dff3944d83d08310b47b8facb64a7abca9.600x338.jpg?t=1720769375",
          productId: 12,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/ss_1ae7debe7f68a4cdde727d984d9e724f65767d66.600x338.jpg?t=1720769375",
          productId: 12,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/ss_2d7faf83b6942dcf69a4035f71ce4f1662826bc6.600x338.jpg?t=1720769375",
          productId: 12,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/ss_ea57d1446c92dbbfc273d7c69c01994562793061.600x338.jpg?t=1720769375",
          productId: 12,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/ss_63e6bef4f24438fc84ac9385ca340d307d1c8bcc.600x338.jpg?t=1720769375",
          productId: 12,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/ss_626ba55e262fe857b8f0d2810603d2268e2df003.600x338.jpg?t=1720769375",
          productId: 12,
          type: "img",
        },

        // Destiny 2
        {
          img: "",
          productId: 13,
          type: "img",
        },
        {
          img: "",
          productId: 13,
          type: "img",
        },
        {
          img: "",
          productId: 13,
          type: "img",
        },
        {
          img: "",
          productId: 13,
          type: "img",
        },
        {
          img: "",
          productId: 13,
          type: "img",
        },
        {
          img: "",
          productId: 13,
          type: "img",
        },
        {
          img: "",
          productId: 13,
          type: "img",
        },

        //
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257033482/movie480_vp9.webm?t=1719265609",
          productId: 14,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256877053/movie480_vp9.webm?t=1661325595",
          productId: 14,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_74e30840772ce482f971e325a58130e2ba966976.600x338.jpg?t=1720218333",
          productId: 14,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_7fcc82f468fcf8278c7ffa95cebf949bfc6845fc.600x338.jpg?t=1720218333",
          productId: 14,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_c142f5078ace9f5e2eb2c80aa3bf768e156b4ee9.600x338.jpg?t=1720218333",
          productId: 14,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_a9642404e586be28f856e8f02d038828f691a5ba.600x338.jpg?t=1720218333",
          productId: 14,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/ss_01fdd090ed1dd70112ce2c6d6fc208df0a008ac7.600x338.jpg?t=1720218333",
          productId: 14,
          type: "img",
        },

        // Hunt: Showdown
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256893785/movie480_vp9.webm?t=1656430960",
          productId: 15,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256938447/movie480_vp9.webm?t=1700471533",
          productId: 15,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_ecccaab1143081ca96d8bf00d8b1c4d3d3291e64.600x338.jpg?t=1719844589",
          productId: 15,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_36f6d959f75d1cca48c2a98d892d2697f6d4bde6.600x338.jpg?t=1719844589",
          productId: 15,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_021db5b59b2108a69fa710164b97e58cfaada03c.600x338.jpg?t=1719844589",
          productId: 15,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_4697d48347130eaf48e03e92556252f6b8744428.600x338.jpg?t=1719844589",
          productId: 15,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/ss_5d14f045ac48f8aa8ccd643a1db7e83a0c384fba.600x338.jpg?t=1719844589",
          productId: 15,
          type: "img",
        },

        // Euro Truck Simulator 2
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257023925/movie480_vp9.webm?t=1715926447",
          productId: 16,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256882174/movie480_vp9.webm?t=1683632053",
          productId: 16,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_54100267623179f54731048c91add16c1c3d3d1e.600x338.jpg?t=1718786615",
          productId: 16,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_e040f74641ac21f15e3ec7c2415fc8b4de0b6bf9.600x338.jpg?t=1718786615",
          productId: 16,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_fd675feae669c7fb4ca6dcfb738d49fb7b7a238d.600x338.jpg?t=1718786615",
          productId: 16,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_edbff61a062a49d1d97269e53b8afbffde05bb24.600x338.jpg?t=1718786615",
          productId: 16,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/ss_c6ca51ea68d6f9ce481538c9b6e85c8fdaa8064e.600x338.jpg?t=1718786615",
          productId: 16,
          type: "img",
        },

        // Gray Zone Warfare
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257019639/movie480_vp9.webm?t=1714481989",
          productId: 17,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257019579/movie480_vp9.webm?t=1714413775",
          productId: 17,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/ss_c3ad41519739ab629d33a5945829400335750a5d.600x338.jpg?t=1719853075",
          productId: 17,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/ss_2d325f8d0a7e89a92a03eb0faf094b5dcb752bb5.600x338.jpg?t=1719853075",
          productId: 17,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/ss_0ff495af00d27e5afe128faeab0cf3370c5040ca.600x338.jpg?t=1719853075",
          productId: 17,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/ss_c5ef6a8c9db250e42a591caf963ddbb919802546.600x338.jpg?t=1719853075",
          productId: 17,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/ss_c5ef6a8c9db250e42a591caf963ddbb919802546.600x338.jpg?t=1719853075",
          productId: 17,
          type: "img",
        },

        // Monster Hunter: World
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256769022/movie480.webm?t=1596524406",
          productId: 18,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256769014/movie480.webm?t=1596524414",
          productId: 18,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.600x338.jpg?t=1711328912",
          productId: 18,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_a262c53b8629de7c6547933dc0b49d31f4e1b1f1.600x338.jpg?t=1711328912",
          productId: 18,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_0dfb20f6f09c196bfc317bd517dc430ed6e6a2a4.600x338.jpg?t=1711328912",
          productId: 18,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_25902a9ae6977d6d10ebff20b87e8739e51c5b8b.600x338.jpg?t=1711328912",
          productId: 18,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/ss_681cc5358ec55a997aee9f757ffe8b418dc79a32.600x338.jpg?t=1711328912",
          productId: 18,
          type: "img",
        },

        // Nier Automata
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256743980/movie480.webm?t=1551200563",
          productId: 19,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/256681393/movie480.webm?t=1493741175",
          productId: 19,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_d0314b4c134329a483b5e43af951f60274abc66b.1920x1080.jpg?t=1719545479",
          productId: 19,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_8b29f7e1ce9a8b9313dc3eb50dbe76a4cf94eef9.600x338.jpg?t=1719545479",
          productId: 19,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/ss_2c265df38c3d2d393d74ee8e74d79bdafa16b143.1920x1080.jpg?t=1719545479",
          productId: 19,
          type: "img",
        },

        // V Rising
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257020634/movie480_vp9.webm?t=1714748047",
          productId: 20,
          type: "video",
        },
        {
          img: "https://cdn.akamai.steamstatic.com/steam/apps/257010443/movie480_vp9.webm?t=1715001644",
          productId: 20,
          type: "video",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604030/ss_19d6b903fd65c410af902a8c5f62c820cfe09292.600x338.jpg?t=1716820827",
          productId: 20,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604030/ss_4a88ba3b0353f3d43f045e5230c9d600e19daae8.600x338.jpg?t=1716820827",
          productId: 20,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604030/ss_262496a8c3ed1335d63398fe06f8dd4d43d311cf.600x338.jpg?t=1716820827",
          productId: 20,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604030/ss_712d9885b750317ab0be515158e51c03cf5944b6.600x338.jpg?t=1716820827",
          productId: 20,
          type: "img",
        },
        {
          img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1604030/ss_e3ea47bf147b505e628dda2d607cf81eb9d56b3b.600x338.jpg?t=1716820827",
          productId: 20,
          type: "img",
        },

        // template
        // {
        //   img: "",
        //   productId: 20,
        //   type: "img",
        // },
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
