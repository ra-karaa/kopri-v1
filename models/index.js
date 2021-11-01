const dbConfig = require("../config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pegawai = require("./pegawai.js")(sequelize, Sequelize);
db.konsul = require("./konsul.js")(sequelize, Sequelize);

db.pegawai.hasMany(db.konsul, { as: "konsul" });
db.konsul.belongsTo(db.pegawai, {
  foreignKey: "pegawaiId",
  as: "pegawai",
});



module.exports = db;
