import ProductModel from "../models/product.model.js";
import categoryService from "./category.service.js";

export default {
  findAllProducts: async () => {
    return await ProductModel.find({});
  },
  findProductById: async (id) => {
    const product = await ProductModel.findOne({_id: id});
    return product;
  }
}