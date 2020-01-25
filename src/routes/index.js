testController = require("../controllers/testController");

exports.appRoute = router => {
  router.get("/test", testController.getTestData);
};
