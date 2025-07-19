const { users } = require('../data/dummyData');

exports.getAllUsers = (req, res) => {
  res.json(users);
};
