const db = require("../models");
const User = db.user;
const Org = db.org;
var bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;
var fs = require('fs');

exports.getAll = async (req, res) => {
  try {
    let query = {
      where: {
        orgId: req.orgId,
        id: { [Op.not]: req.userId }
      }
    }
    if (req.orgId == 0) {
      query = {
        where: {
          userType: "admin",
          id: { [Op.not]: req.userId },
        },
        include: [{ model: Org, attributes: ['name'] }]
      }
    }
    const users = await User.findAll(query);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateOrCreateUser = async (req, res) => {
  try {
    let user = {};
    let updateObj = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userType: req.body.userType,
      roleId: req.body.roleId
    }
    if (req.body.id) {
      user = await User.update(updateObj, {
        where: {
          id: req.body.id
        }
      });
      res.status(200).send(user);
    } else {
      updateObj.createdBy = req.userId;
      updateObj.orgId = req.orgId;
      updateObj.password = bcrypt.hashSync("Test@123", 8);
      user = await User.create(updateObj);
    }
    res.status(200).send(user);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send({ user: deleteUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    let data = JSON.parse(req.body.data);
    let updateObj = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    }
    if (req.files) {
      var file = req.files.file;
      let fileName = req.userId + "." + file.name.split('.').pop();
      updateObj['profilePic'] = "http://localhost:8082/images/" + fileName
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
        var filePath = 'public/images/' + fileName;
        if (fs.existsSync(filePath))
          fs.unlinkSync(filePath);
        await file.mv(filePath);
      } else {
        res.status(500).send({ message: "This format is not allowed , please upload file with '.png','.gif','.jpg'" });
      }
    }
    let user = await User.update(updateObj, {
      where: {
        id: req.userId
      }
    });
    res.status(200).send(user);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};