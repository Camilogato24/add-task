const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_habitask', 'admin', 'passAWSbd', {
  host: 'database-habitask.c1uw4wgcq9bw.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  define: {
    timestamps: false, // Desactivar las marcas de tiempo globalmente
  },
});

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: ['^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$', 'i'],
        msg: 'La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial.',
      },
    },
  },
  // Desactivar las marcas de tiempo automáticas
  timestamps: false,
});

module.exports = Usuario;