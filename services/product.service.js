import ProductModel from "../models/product.model.js";

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
    return await ProductModel.findOne({_id: id});
  },
  findProductOrderByPrice: async () => {
    return await ProductModel.aggregate([
      {
        $lookup: {
          from: 'shops',
          localField: 'shopId',
          foreignField: '_id',
          as: 'shopInfo'
        }
      }
    ]).sort({price: -1});
  },
  findProductHistory: async () => {
    return await ProductModel.aggregate([
      {
        $lookup: {
          from: 'shops',
          localField: 'shopId',
          foreignField: '_id',
          as: 'shopInfo'
        }
      }
    ]).limit(4);
  },
  findProductSale: async  () => {
    return await ProductModel.aggregate([
      {
        $lookup: {
          from: 'shops',
          localField: 'shopId',
          foreignField: '_id',
          as: 'shopInfo'
        }
      }
    ]).sort({sale: -1});
  }
}