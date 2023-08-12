import ProductModel from "../models/product.model.js";

export default {
  findAllProducts: async () => {
    return await ProductModel.find({});
  },
  findProductById: async (id) => {
    return await ProductModel.findOne({_id: id});
  }
}