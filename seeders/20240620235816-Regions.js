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
      "Regions",
      [
        {
          name: "Indonesia",
          icon: "https://community.akamai.steamstatic.com/public/images/countryflags/id.gif"
        },
        {
          name: "Vietnam",
          icon: "https://community.akamai.steamstatic.com/public/images/countryflags/vn.gif",
        },
        {
          name: "China",
          icon: "https://community.akamai.steamstatic.com/public/images/countryflags/cn.gif"
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
    await queryInterface.bulkDelete('Regions', null, {});
  },
};
