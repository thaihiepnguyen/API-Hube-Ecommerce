import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please add a full name']
    },
    price: {
      type: Number,
      required: [true, 'Please add an email']
    },
    rate: {
      type: Number,
      required: [true, 'Please add a password']
    },
    image: {
      type: String,
      required: [true, 'Please add an image']
    },
    address: {
      type: String,
      required: [true, 'Please add an address']
    },
    discount: {
      type: Number,
    },
    catId: {
      type: Object,
      required: [true, 'Please add an address']
    }
  },
  { timestamps: true }
)

export default mongoose.model('Products', productSchema, 'products');