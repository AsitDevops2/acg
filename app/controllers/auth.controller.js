const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const orgController = require("./org.controller");
exports.signup = async (req, res) => {
  const org = await orgController.createOrg({ name: req.body.orgName });
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    orgId: org.id,
    userType: "admin",
    roleId: 2
  })
    .then(user => {
      res.send({ message: "User registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    },
    include:[Role]
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      // var authorities = [];
     
        var token = jwt.sign({ id: user.id, orgId: user.orgId, userType:user.userType ,role: user.role.name}, config.secret, {
          expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          permissions: user.role.permissions,
          accessToken: token
        });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.validateRequest = (req, res) => {
  res.status(200).send({ status: 1, message: "validated successfully" });
}