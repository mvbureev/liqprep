const Test = require('../../models/TestModel');

const testGetById = (req, res) => {
  const id = req.params.testId;
  Test.findById(id)
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json('No test for provided id');
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

module.exports = testGetById;
