const mongoose = require('mongoose');
const Test = require('../../models/TestModel');

async function testCreate(req, res) {
  /* eslint-disable no-underscore-dangle */
  const _id = new mongoose.Types.ObjectId();

  const test = new Test({
    _id,
    text: req.body.name,
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

module.exports = testCreate;
