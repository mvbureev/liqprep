const Test = require('../../models/TestModel');

const testGetAll = (req, res) => {
  Test.find()
    // .populate({ // Feature like JOIN in SQL
    // path: 'members',
    // match: { age: { $gte: 21 } },
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    // select: 'codewarsId -_id',
    // options: { limit: 5 },
    // })
    .select('-__v')
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = testGetAll;
