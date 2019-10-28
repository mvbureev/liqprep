import { model, Schema } from 'mongoose';
// import bcrypt from 'bcrypt';
// import { isEmail } from 'validator';

const TestSchema = new Schema({
  tasks: [{
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
  }],
  result: {
    name: {
      type: String,
      default: null,
      sparse: true,
      required: true,
      minLength: 2,
    },
    amount: {
      type: Number,
      default: null,
      sparse: true,
      required: true,
    },
    updateOn: {
      type: Date,
      default: Date.now,
    },
  },
});

export default model('Test', TestSchema);
