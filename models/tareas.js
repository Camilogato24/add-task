const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_habitask', 'admin', 'passAWSbd', {
  host: 'database-habitask.c1uw4wgcq9bw.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  define: {
    timestamps: false, // Desactivar las marcas de tiempo globalmente
  },
});


const Tarea = sequelize.define('Tarea', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  fecha_completado: {
    type: DataTypes.DATE,
  },
  // Desactivar las marcas de tiempo automáticas
  timestamps: false,
});

module.exports = Tarea;
