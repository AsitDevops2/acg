module.exports = (sequelize, Sequelize) => {
    const Org = sequelize.define("organisation", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {type: Sequelize.STRING},
      description:{type: Sequelize.STRING,allowNull:true},
    });
  
    return Org;
  };
  