const testModel = require("../models/testModel");

exports.getTestData = (req, res, next) => {
  const tests = testModel.getTests();

  res.render("test", { tests });
};
