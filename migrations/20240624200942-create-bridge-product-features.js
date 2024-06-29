'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeProductFeatures', {
      productId: {
        type: Sequelize.UUID,
        allowNull:false,
        primaryKey:true,
        references: {
          model:"products",
          key:"id"
        }

      },
      featureId: {
        type: Sequelize.UUID,
        allowNull:false,
        primaryKey:true,
        references: {
          model:"Features",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BridgeProductFeatures');
  }
};