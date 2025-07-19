const { categories } = require('../data/dummyData');

exports.getAllCategories = (req, res) => {
  res.json(categories);
};
