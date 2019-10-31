const Test = require('../../models/TestModel');

async function testUpdateById(req, res) {
  const id = req.params.testId;

  Test.update({ _id: id }, { $set: req.body })
    .exec()
    .then((doc) => {
      if (doc.n) {
        res.status(200).json('Test updated');
      } else {
        res.status(400).json('Test not found');
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = testUpdateById;
