module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {type: Sequelize.STRING,unique: true},
    description:{type: Sequelize.STRING},
    permissions: {type: Sequelize.JSON},
    createdBy:{type: Sequelize.INTEGER}
  });

  return Role;
};
