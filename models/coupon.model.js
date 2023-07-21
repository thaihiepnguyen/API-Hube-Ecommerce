import mongoose from 'mongoose';

const couponSchema = mongoose.Schema({
    code: {
      type: String,
      required: [true, 'Please add code']
    },
    percentage: {
      type: String,
      required: [true, 'Please add percentage']
    },
    description: {
      type: String,
      required: [true, 'Please add a description']
    }
  },
  { timestamps: true }
)

export default mongoose.model('Coupons', couponSchema, 'coupons');