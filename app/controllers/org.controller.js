const db = require("../models");
const Org = db.org;

exports.getAll = async(req, res) => {
  try {
    const orgs = await Org.findAll();
    res.status(200).send(orgs);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getOrg = async(req, res) => {
  try {
    const org = await Org.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(org);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }};

  exports.updateOrCreateOrg = async(req, res) => {
    try {
      let updateObj ={
        name: req.body.name,
        description: req.body.description,
      }
      if(req.body.id){
          let updatedOrg = await Org.update(updateObj,{
            where: {
              id: req.body.id
            }
          });
          res.status(200).send(updatedOrg);
      }else{
        const org= await createOrg(updateObj);
        res.status(200).send(org);
      }
     
    } catch (err) {
      res.status(500).send({ message: err.message });
    }};
  
    exports.deleteOrg = async(req, res) => {
      try {
        const deleteOrg = await Org.destroy({
          where: {
              id:req.params.id
          }
      });
        res.status(200).send({org:deleteOrg});
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    };
    
    exports.createOrg = async(data)=>{
       return result = await Org.create(data);
    }