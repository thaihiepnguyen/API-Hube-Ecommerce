import ProductModel from "../models/product.model.js";
import categoryService from "./category.service.js";

export default {
  findAllProducts: async () => {
    return await ProductModel.aggregate([
      {
        $lookup: {
          from: 'shops',
          localField: 'shopId',
          foreignField: '_id',
          as: 'shopInfo'
        }
      }
    ]);
  },
  findProductById: async (id) => {
    const product = await ProductModel.findOne({_id: id});
    return product;
  },
  findProductOrderByPrice: async () => {
    return await ProductModel.find({}, null, {
      sort: {
        price: -1
      }
    })
  },
  findProductHistory: async () => {
    return await ProductModel.find({}, null, {
      limit: 4
    })
  }
}