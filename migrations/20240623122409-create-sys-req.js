'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SysReqs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      productId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      recommended: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      osId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'CategorySysReqs',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      processor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      memory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      graphics: {
        allowNull: false,
        type: Sequelize.STRING
      },
      directW: {
        allowNull: true,
        type: Sequelize.STRING
      },
      storage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SysReqs');
  }
};