import ProductModel from "../models/product.model.js";

export default {
  findAllProducts: async () => {
    return await ProductModel.find({});
  }
}