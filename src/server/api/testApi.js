const Test = require('../models/TestModel');

async function testCreate(req, res) {
  const test = new Test({
    text: req.body.text,
    answers: req.body.answers,
    trueAnswer: req.body.trueAnswer,
  });

  test
    .save()
    .then(() => {
      res.status(201).json('Test created');
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

const testDeleteById = (req, res) => {
  const { id } = req.params;
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

const testGetAll = (req, res) => {
  Test.find()
    // .populate({ // Feature like JOIN in SQL
    // path: 'members',
    // match: { age: { $gte: 21 } },
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    // select: 'codewarsId -_id',
    // options: { limit: 5 },
    // })
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const testGetById = (req, res) => {
  const { id } = req.params;
  Test.findById(id)
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

async function testUpdateById(req, res) {
  const { id } = req.params;

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

module.exports = {
  testCreate,
  testDeleteById,
  testGetAll,
  testGetById,
  testUpdateById,
};
