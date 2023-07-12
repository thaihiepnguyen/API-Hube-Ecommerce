import CategoryModel from "../models/category.model.js";


export default {
  getAllCategories: async () => {
    return await CategoryModel.find();
  }
}