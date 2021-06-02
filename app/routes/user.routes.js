const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/users",
    [authJwt.verifyToken],
    controller.getAll
  );

  app.get(
    "/api/user/:id",
    [authJwt.verifyToken],
    controller.getUser
  );

  app.put(
    "/api/user/add_edit",
    [authJwt.verifyToken],
    controller.updateOrCreateUser
  );
  app.delete(
    "/api/user/:id",
    [authJwt.verifyToken],
    controller.deleteUser
  );
  app.post(
    "/api/user/profile",
    [authJwt.verifyToken],
    controller.updateUserProfile
  );
 
  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
};
