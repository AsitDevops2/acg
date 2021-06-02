module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    firstName: { type: Sequelize.STRING},
    lastName: { type: Sequelize.STRING},
    email: {type: Sequelize.STRING,unique: true},
    password: {type: Sequelize.STRING},
    userType:{ type: Sequelize.STRING,values:["ADMIN","SUPERADMIN","CUSTOMER","SUPPLIER"]},
    createdBy:{type: Sequelize.INTEGER},
    profilePic:{type: Sequelize.STRING}
  });

  return User;
};
