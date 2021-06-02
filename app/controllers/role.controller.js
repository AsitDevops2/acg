const db = require("../models");
const Role = db.role;

exports.getAll = async(req, res) => {
  try {
    const roles = await Role.findAll({
        where: {
          orgId: req.orgId,
        }
      });
    res.status(200).send(roles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getRole = async(req, res) => {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(role);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }};

  exports.updateOrCreateRole = async(req, res) => {
    try {
      let updateObj ={
        name: req.body.name,
        description: req.body.description,
        permissions: req.body.permissions,
        createdBy:req.userId,
        orgId:req.orgId
      }
      if(req.body.id){
          let updatedRole = await Role.update(updateObj,{
            where: {
              id: req.body.id
            }
          });
          res.status(200).send(updatedRole);
      }else{
        const role= await Role.create(updateObj);
        res.    status(200).send(role);
      }
     
    } catch (err) {
      res.status(500).send({ message: err.message });
    }};
  
    exports.deleteRole = async(req, res) => {
      try {
        const deleteRole = await Role.destroy({
          where: {
              id:req.params.id
          }
      });
        res.status(200).send({role:deleteRole});
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    };
    exports.getRoleKeyVal=async(req, res)=>{
      try {
        const roles = await Role.findAll({
          where: {
            orgId: req.orgId,
          }
        });
        res.status(200).send(roles);
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    }