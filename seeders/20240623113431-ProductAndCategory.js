"use strict";

const products = require("../models/products");

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

    const categoriesData = [
      {
        id: crypto.randomUUID(),
        name: "Open World",
      },
      {
        id: crypto.randomUUID(),
        name: "RPG",
      },
      {
        id: crypto.randomUUID(),
        name: "Action",
      },
    ];

    const productsData = [];
    for (let i = 0; i < 10; i++) {
      productsData.push({
        id: crypto.randomUUID(),
        name: "Game keren " + i,
        price: "IDR. " + i,
        short_description: "waw " + i,
        release_date: "kapan-kapan2",
        description: "waw keren" + i,
        developer: "dev" + i,
        publisher: "publisher " + i,
        product_thumbnail: "gambar keren " + i,
        video: "dangdutan " + i,
      });
    }

    const bridgeProductCategoriesData = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 3; j++) {
        bridgeProductCategoriesData.push({
          productId: productsData[i].id,
          categoryId: categoriesData[j].id,
        });
      }
    }
    // const bridgeProductCategoriesData = [];
    // for (let i = 0; i < 5; i++) {
    //   const randomProductId = Math.floor(Math.random() * productsData.length);
    //   const randomCategoriesId = Math.floor(Math.random() * categoriesData.length);
    //   bridgeProductCategoriesData.push({
    //     productId: productsData[randomProductId].id,
    //     categoryId: categoriesData[randomCategoriesId].id,
    //   });
    // }

    await queryInterface.bulkInsert("Categories", categoriesData, {});
    await queryInterface.bulkInsert("Products", productsData, {});
    await queryInterface.bulkInsert("BridgeProductCategories", bridgeProductCategoriesData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('BridgeProductCategories', null, {});
  },
};
