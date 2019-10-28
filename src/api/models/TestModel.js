import { model, Schema } from 'mongoose';
// import bcrypt from 'bcrypt';
// import { isEmail } from 'validator';

const TestSchema = new Schema({
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

export default model('Test', TestSchema);
