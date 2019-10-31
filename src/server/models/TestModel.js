const { model, Schema } = require('mongoose');

const TestSchema = new Schema({
  _id: Schema.Types.ObjectId,
  text: {
    type: String,
    default: null,
    sparse: true,
    required: true,
    minLength: 2,
  },
  answers: [{
    answer: {
      type: String,
      default: null,
      sparse: true,
      required: true,
      minLength: 2,
    },
  }],
  trueAnswer: {
    type: String,
    default: null,
    sparse: true,
    required: true,
    minLength: 2,
  },
});

module.exports = model('Test', TestSchema);
