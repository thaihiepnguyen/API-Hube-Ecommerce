import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Please add a full name']
  },
  email: {
  type: String,
    required: [true, 'Please add an email']
  },
  password: {
    type: String,
      required: [true, 'Please add a password']
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  }
  },
  { timestamps: true }
)

export default mongoose.model('Users', userSchema, 'users');