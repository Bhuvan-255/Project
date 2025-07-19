const { groceries } = require('../data/dummyData');

exports.getAllGroceries = (req, res) => {
  res.json(groceries);
};

exports.createGrocery = (req, res) => {
  res.json({ message: 'Grocery added (dummy)' });
};

exports.updateGrocery = (req, res) => {
  res.json({ message: `Grocery with id ${req.params.id} updated (dummy)` });
};

exports.deleteGrocery = (req, res) => {
  res.json({ message: `Grocery with id ${req.params.id} deleted (dummy)` });
};
