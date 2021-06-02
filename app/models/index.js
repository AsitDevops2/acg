const config = require("../config/db.config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

db.user = require("../models/user.model.js")(sequelize, Sequelize,DataTypes);
db.role = require("../models/role.model.js")(sequelize, Sequelize,DataTypes);
db.org = require("../models/org.model.js")(sequelize, Sequelize,DataTypes);

db.role.hasMany(db.user, {foreignKey: "id"});
db.user.belongsTo(db.role, {foreignKey:'roleId'});
db.org.hasMany(db.user, {foreignKey: 'id'});
db.user.belongsTo(db.org, {foreignKey: 'orgId'});

db.ROLES = ["admin", "superAdmin"];

module.exports = db;
