const Test = require('../../models/TestModel');

const testDeleteById = (req, res) => {
  const id = req.params.testId;
  Test.remove({ _id: id })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json('Test deleted');
      } else {
        res.status(400).json('Test not found');
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = testDeleteById;
