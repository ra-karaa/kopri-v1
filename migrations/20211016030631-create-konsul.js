'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Konsuls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penyakit: {
        type: Sequelize.STRING
      },
      waktu: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pegawai_id:{
        type : Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references : {
          model : 'Pegawais',
          key :'id',
          as : 'pehawai_id'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Konsuls');
  }
};