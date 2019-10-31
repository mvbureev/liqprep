import { model, Schema } from 'mongoose';

const TestSchema = new Schema({
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
});

export default model('Result', TestSchema);
