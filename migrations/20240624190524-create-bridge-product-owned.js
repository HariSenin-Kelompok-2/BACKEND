'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BridgeProductOwneds', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model:"Users",
          key:"id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model:"products",
          key:"id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BridgeProductOwneds');
  }
};