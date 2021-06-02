const { authJwt } = require("../middleware");
const controller = require("../controllers/role.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/roles",
    [authJwt.verifyToken],
    controller.getAll
  );

  app.get(
    "/api/role/:id",
    [authJwt.verifyToken],
    controller.getRole
  );

  app.put(
    "/api/role/add_edit",
    [authJwt.verifyToken],
    controller.updateOrCreateRole
  );
  app.delete(
    "/api/role/:id",
    [authJwt.verifyToken],
    controller.deleteRole
  );
  app.get(
    "/api/role/key/val",
    [authJwt.verifyToken],
    controller.getRoleKeyVal
  );
};
