const { model, Schema } = require('mongoose');

const TestSchema = new Schema({
  text: {
    type: String,
    default: null,
    required: true,
  },
  answers: [{
    type: String,
    default: null,
    required: true,
  }],
  trueAnswer: {
    type: Number,
    default: null,
    required: true,
  },
});

module.exports = model('Test', TestSchema);
