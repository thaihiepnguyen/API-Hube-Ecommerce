import CategoryService from "../services/category.service.js";

export default {
  getAllCategories: async (req, res) => {
    const categories =  await CategoryService.getAllCategories();
    if (!categories) return res.status(400).json({ message: 'Can not get categories'})

    return res.status(200).json({categories});
  }
}